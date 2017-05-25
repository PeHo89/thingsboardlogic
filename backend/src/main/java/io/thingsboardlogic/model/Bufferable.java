package io.thingsboardlogic.model;

import com.datastax.driver.core.utils.Bytes;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.nio.ByteBuffer;

/**
 * Interface for Java object serialization and deserialization
 */
public interface Bufferable extends Serializable {

    static Bufferable deserialize(ByteBuffer bytes) {
        String hx = Bytes.toHexString(bytes);
        ByteBuffer ex = Bytes.fromHexString(hx);

        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(ex.array()));) {
            return (Bufferable) ois.readObject();

        } catch (ClassNotFoundException | IOException e) {
            System.err.println("Error while deserializing bufferable object.");
            return null;
        }
    }

    default ByteBuffer serialize() {
        try (ByteArrayOutputStream bytes = new ByteArrayOutputStream();
             ObjectOutputStream oos = new ObjectOutputStream(bytes);) {
            oos.writeObject(this);
            String hexString = Bytes.toHexString(bytes.toByteArray());
            return Bytes.fromHexString(hexString);

        } catch (IOException e) {
            System.err.println("Error while serializing bufferable object.");
            return null;
        }
    }
}