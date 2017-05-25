package io.thingsboardlogic.presentation.impl;

import io.thingsboardlogic.business.ThingsboardlogicBusiness;
import io.thingsboardlogic.business.impl.ThingsboardlogicBusinessImpl;
import io.thingsboardlogic.model.EditWatcherDto;
import io.thingsboardlogic.model.SaveWatcherDto;
import io.thingsboardlogic.model.StartStopWatcherDto;
import io.thingsboardlogic.model.WatcherDto;
import io.thingsboardlogic.presentation.RestThingsboardLogic;
import io.thingsboardlogic.util.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Implementation of presentation layer of Thingsboardlogic
 */
@CrossOrigin
@Controller
public class RestThingsboardLogicImpl implements RestThingsboardLogic {

    private HashMap<String, ThingsboardlogicBusiness> thingsboardlogicBusinessHashMap = new HashMap<>();


    @Override
    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(@RequestParam(value = "email") String email, @RequestParam(value = "password") String password, @RequestParam(value = "host") String host, @RequestParam(value = "port") String port) {
        if(!Utils.isEmailValid(email) || !Utils.isHostValid(host) || !Utils.isPortValid(port)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(email)) {
            return this.thingsboardlogicBusinessHashMap.get(email).login(email, password, host, port);
        } else {
            this.thingsboardlogicBusinessHashMap.put(email, new ThingsboardlogicBusinessImpl(host));
            return this.thingsboardlogicBusinessHashMap.get(email).login(email, password, host, port);
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logout(@RequestParam(value = "email") String email) {
        if(!Utils.isEmailValid(email)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(email)) {
            return this.thingsboardlogicBusinessHashMap.get(email).logout();
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/deleteAccount", method = RequestMethod.DELETE)
    public String deleteAccount(@RequestParam(value = "email") String email) {
        if(!Utils.isEmailValid(email)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(email)) {
            ThingsboardlogicBusiness thingsboardlogicBusiness = this.thingsboardlogicBusinessHashMap.get(email);
            this.thingsboardlogicBusinessHashMap.remove(email);
            return thingsboardlogicBusiness.deleteAccount();
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/startWatcher", method = RequestMethod.PUT)
    public String startWatcher(@RequestBody StartStopWatcherDto startStopWatcherDto) {
        if(!Utils.isStartStopWatcherDtoValid(startStopWatcherDto)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(startStopWatcherDto.getEmail())) {
            return this.thingsboardlogicBusinessHashMap.get(startStopWatcherDto.getEmail()).startWatcher(startStopWatcherDto.getWatcherid());
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/stopWatcher", method = RequestMethod.PUT)
    public String stopWatcher(@RequestBody StartStopWatcherDto startStopWatcherDto) {
        if(!Utils.isStartStopWatcherDtoValid(startStopWatcherDto)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(startStopWatcherDto.getEmail())) {
            return this.thingsboardlogicBusinessHashMap.get(startStopWatcherDto.getEmail()).stopWatcher(startStopWatcherDto.getWatcherid());
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/loadWatcher", method = RequestMethod.GET)
    public WatcherDto loadWatcher(@RequestParam(value = "email") String email, @RequestParam(value = "watcherid") String watcherId) {
        if(!Utils.isEmailValid(email)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(email)) {
            return this.thingsboardlogicBusinessHashMap.get(email).loadWatcher(watcherId);
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/deleteWatcher", method = RequestMethod.DELETE)
    public String deleteWatcher(@RequestParam(value = "email") String email, @RequestParam(value = "watcherid") String watcherId) {
        if(!Utils.isEmailValid(email)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(email)) {
            return this.thingsboardlogicBusinessHashMap.get(email).deleteWatcher(watcherId);
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/loadTelemetryKeys", method = RequestMethod.GET)
    public String[] loadTelemetryKeys(@RequestParam(value = "email") String email, @RequestParam(value = "deviceid") String deviceId) {
        if(!Utils.isEmailValid(email)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(email)) {
            return this.thingsboardlogicBusinessHashMap.get(email).loadTelemetryKeys(deviceId);
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/saveWatcher", method = RequestMethod.POST)
    public String saveWatcher(@RequestBody SaveWatcherDto saveWatcherDto) {
        if(!Utils.isSaveWatcherDtoValid(saveWatcherDto)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(saveWatcherDto.getEmail())) {
            return this.thingsboardlogicBusinessHashMap.get(saveWatcherDto.getEmail()).saveWatcher(saveWatcherDto);
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/editWatcher", method = RequestMethod.PUT)
    public String editWatcher(@RequestBody EditWatcherDto editWatcherDto) {
        if(!Utils.isEditWatcherDtoValid(editWatcherDto)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(editWatcherDto.getEmail())) {
            return this.thingsboardlogicBusinessHashMap.get(editWatcherDto.getEmail()).editWatcher(editWatcherDto);
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/getWatcherList", method = RequestMethod.GET)
    public ArrayList<WatcherDto> getWatcherList(@RequestParam(value = "email") String email) {
        if(!Utils.isEmailValid(email)) {
            return null;
        }
        if (this.thingsboardlogicBusinessHashMap.containsKey(email)) {
            return this.thingsboardlogicBusinessHashMap.get(email).getWatcherList();
        } else {
            return null;
        }
    }

    @Override
    @ResponseBody
    @RequestMapping(value = "/isLoggedIn", method = RequestMethod.GET)
    public boolean isLoggedIn(@RequestParam(value = "email") String email) {
        if(!Utils.isEmailValid(email)) {
            return false;
        }
        return this.thingsboardlogicBusinessHashMap.containsKey(email) && this.thingsboardlogicBusinessHashMap.get(email).isLoggedIn();
    }

}
