package io.thingsboardlogic.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Thingsboardlogic
 * @Author: Peter Holzer <e1425797@student.tuwien.ac.at>
 * @Date: 18.05.2017
 */

@SpringBootApplication
@ComponentScan("io.thingsboardlogic")
public class ThingsboardLogicApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThingsboardLogicApplication.class, args);
	}
}
