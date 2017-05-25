package io.thingsboardlogic.util;

import io.thingsboardlogic.model.EditWatcherDto;
import io.thingsboardlogic.model.SaveWatcherDto;
import io.thingsboardlogic.model.StartStopWatcherDto;
import org.apache.commons.validator.routines.UrlValidator;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import static org.springframework.http.HttpHeaders.USER_AGENT;

/**
 * Utils for Thingsboardlogic
 */
public final class Utils {

    public static String AUTHENTICATION_LINK = "${HOST}:${PORT}/api/auth/login";
    public static String LOAD_TELEMETRY_KEYS_LINK = "${HOST}:${PORT}/api/plugins/telemetry/${DEVICEID}/keys/timeseries";
    public static String LOAD_TELEMETRY_DATA_LINK = "${HOST}:${PORT}/api/plugins/telemetry/${DEVICEID}/values/timeseries?keys=${KEYS}&startTs=${STARTTS}";
    public static String RPC_CALL_LINK = "${HOST}:${PORT}/api/plugins/rpc/twoway/${DEVICEID}";

    public static String JWT_JSON_MESSAGE = "{\"username\":\"${EMAIL}\",\"password\":\"${PASSWORD}\"}";


    /**
     * Loads the JSON web token
     * @param host
     * @param port
     * @param email
     * @param password
     * @return
     */
    public static String getJwt(String host, String port, String email, String password) {
        String message = JWT_JSON_MESSAGE.replace("${EMAIL}", email).replace("${PASSWORD}", password);
        String address = AUTHENTICATION_LINK.replace("${HOST}", host).replace("${PORT}", port);
        String loginResponse = executeHttpPostRequest(address, message, null);
        String jwt = jsonStringToJsonObjectConverter(loginResponse).get("token").toString();
        return jwt;
    }

    /**
     * Converts a JSON string to JSON object
     * @param jsonString
     * @return
     */
    public static JSONObject jsonStringToJsonObjectConverter(String jsonString) {
        JSONObject jsonObject;
        try {
            jsonObject = (JSONObject) new JSONParser().parse(jsonString);
        } catch (ParseException ex) {
            return null;
        }
        return jsonObject;
    }

    /**
     * Sends http-post request
     * @param address
     * @param message
     * @param headerList
     * @return
     */
    public static String executeHttpPostRequest(String address, String message, ArrayList<String> headerList) {
        HttpURLConnection connection = null;

        try {
            //Create connection and add header
            URL url = new URL(address);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("User-Agent", USER_AGENT);
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("Accept", "application/json");

            if (headerList != null && !headerList.isEmpty()) {
                for (String header : headerList) {
                    String[] parts = header.split(":");
                    String key = parts[0];
                    String value = parts[1];
                    connection.setRequestProperty(key, value);
                }
            }

            connection.setRequestProperty("Content-Length",
                    Integer.toString(message.getBytes().length));
            connection.setRequestProperty("Content-Language", "en-US");

            connection.setUseCaches(false);
            connection.setDoOutput(true);

            //Send request
            DataOutputStream dataOutputStream = new DataOutputStream(connection.getOutputStream());
            dataOutputStream.writeBytes(message);
            dataOutputStream.flush();
            dataOutputStream.close();

            //Get Response
            InputStream inputStream = connection.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            StringBuffer response = new StringBuffer();

            String line;

            while ((line = bufferedReader.readLine()) != null) {
                response.append(line);
                response.append('\n');
            }
            bufferedReader.close();
            return response.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            if (connection != null) {
                connection.disconnect();
            }
        }
    }

    /**
     * Sends http-get request
     * @param address
     * @param headerList
     * @return
     */
    public static String executeHttpGetRequest(String address, ArrayList<String> headerList) {
        HttpURLConnection connection = null;

        try {
            //Create connection and add header
            URL url = new URL(address);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setRequestProperty("User-Agent", USER_AGENT);
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("Accept", "application/json");

            for (String header : headerList) {
                String[] parts = header.split(":");
                String key = parts[0];
                String value = parts[1];
                connection.setRequestProperty(key, value);
            }

            connection.setRequestProperty("Content-Language", "en-US");

            connection.setUseCaches(false);
            connection.setDoOutput(true);

            //Send request
            int responsecode = connection.getResponseCode();

            //Get Response
            InputStream inputStream = connection.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            StringBuffer response = new StringBuffer();

            String line;

            while ((line = bufferedReader.readLine()) != null) {
                response.append(line + "\n");
            }
            bufferedReader.close();
            return response.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            if (connection != null) {
                connection.disconnect();
            }
        }
    }

    /**
     * Checks, if email is valid
     * @param email
     * @return
     */
    public static boolean isEmailValid(String email) {
        boolean result = true;
        try {
            InternetAddress internetAddress = new InternetAddress(email);
            internetAddress.validate();
        } catch (AddressException e) {
            result = false;
        }
        return result;
    }

    /**
     * Checks, if host is valid
     * @param host
     * @return
     */
    public static boolean isHostValid(String host) {
        if (!host.startsWith("http://")) {
            host = "http://" + host;
        }
        if (host.equals("http://localhost")) {
            return true;
        }
        String[] schemes = {"http", "https"};
        UrlValidator urlValidator = new UrlValidator(schemes);
        return urlValidator.isValid(host);
    }

    /**
     * Checks, if port is valid
     * @param port
     * @return
     */
    public static boolean isPortValid(String port) {
        boolean result = true;
        try {
            int portInt = Integer.parseInt(port);
            if (portInt < 0 || portInt > 65535) {
                result = false;
            }
        } catch (NumberFormatException e) {
            result = false;
        }
        return result;
    }

    /**
     * Checks, if startStopWatcherDto is valid
     * @param startStopWatcherDto
     * @return
     */
    public static boolean isStartStopWatcherDtoValid(StartStopWatcherDto startStopWatcherDto) {
        boolean result = true;
        if (startStopWatcherDto.getEmail() == null || !isEmailValid(startStopWatcherDto.getEmail()) || startStopWatcherDto.getWatcherid() == null || startStopWatcherDto.getWatcherid().equals("")) {
            result = false;
        }
        return result;
    }

    /**
     * Checks, if saveWatcherDto is valid
     * @param saveWatcherDto
     * @return
     */
    public static boolean isSaveWatcherDtoValid(SaveWatcherDto saveWatcherDto) {
        boolean result = true;
        if (saveWatcherDto.getEmail() == null || !isEmailValid(saveWatcherDto.getEmail()) || saveWatcherDto.getSourcedeviceid() == null || saveWatcherDto.getSourcedeviceid().equals("") || saveWatcherDto.getSourcetelemetrykeys() == null || saveWatcherDto.getSourcetelemetrykeys().equals("") || saveWatcherDto.getBooleanlogic() == null || saveWatcherDto.getBooleanlogic().equals("") || saveWatcherDto.getTimegranularity() == null || !isPositiveInteger(saveWatcherDto.getTimegranularity()) || saveWatcherDto.getTargetdeviceid() == null || saveWatcherDto.getTargetdeviceid().equals("") || saveWatcherDto.getMessagetrue() == null || saveWatcherDto.getMessagetrue().equals("") || saveWatcherDto.getMessagefalse() == null || saveWatcherDto.getMessagefalse().equals("") || saveWatcherDto.getWatchername() == null || saveWatcherDto.getWatchername().equals("")) {
            result = false;
        }
        try {
            int timegranularityInt = Integer.parseInt(saveWatcherDto.getTimegranularity());
            if (timegranularityInt < 0) {
                result = false;
            }
        } catch (NumberFormatException e) {
            result = false;
        }
        return result;
    }

    /**
     * Checks, if editWatcherDto is valid
     * @param editWatcherDto
     * @return
     */
    public static boolean isEditWatcherDtoValid(EditWatcherDto editWatcherDto) {
        boolean result = true;
        if (editWatcherDto.getEmail() == null || !isEmailValid(editWatcherDto.getEmail()) || editWatcherDto.getWatcherid() == null || editWatcherDto.getWatcherid().equals("") || editWatcherDto.getBooleanlogic() == null || editWatcherDto.getBooleanlogic().equals("") || editWatcherDto.getTimegranularity() == null || !isPositiveInteger(editWatcherDto.getTimegranularity()) || editWatcherDto.getMessagetrue() == null || editWatcherDto.getMessagetrue().equals("") || editWatcherDto.getMessagefalse() == null || editWatcherDto.getMessagefalse().equals("") || editWatcherDto.getWatchername() == null || editWatcherDto.getWatchername().equals("")) {
            result = false;
        }
        return result;
    }

    /**
     * Checks, if number is a positive integer
     * @param number
     * @return
     */
    private static boolean isPositiveInteger(String number) {
        boolean result = true;
        try {
            int numberInt = Integer.parseInt(number);
            if (numberInt < 0) {
                result = false;
            }
        } catch (NumberFormatException e) {
            result = false;
        }
        return result;
    }
}
