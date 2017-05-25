# Thingsboardlogic

This is an application for adding more functionality to Thingsboard.io! E.g. turn on GPIO 18 on Raspberry Pi 2, if temperature sensor from Latte Panda is more than 50 degree centrigrade. Try it!

This application is a result of my bachelor thesis at the Vienna University of Technology. The field of research is *Cloud service and user interface for cloud application*. I am doing my bachelor thesis at *E182 - Institut für Technische Informatik*. The main supervisor is *Grosu, Radu; Univ.Prof. Dipl.-Ing. Dr.rer.nat.*. The beside supervisor is *Christian  Hirsch; Univ.Ass. Dipl.-Ing. BSc*.

## Getting Started

This application is built with Spring Boot at backend and with AngularJS at frontend. Thingsboardlogic uses for its data storage the same database as Thingsboard do.

### Prerequisites

* Thingsboard server running somewhere in the local network or on the internet
* 'schema.cql' executed on the machine where Thingsboard server is running
* Java 1.8+
* Apache Maven 3.3.9+

### Installing
* Download and extract the application somewhere on your directory
* run 'schema.cql' from top level directory of the extracted application on the machine where Thingsboard and Cassandra are running
* From the top level directory of the extracted application, run:
    ````
    mvn clean install
    cd backend
    mvn spring-boot:run
    ````
* Wait for the application to start and then point your browser to 'http://localhost:8090'

## Usage
Short descriptions of the single pages of Thingsboardlogic.

### Login
Login with data of Thingsboard server (user data and connection data).

### Overview
Administrate your saved Watcher (add new, start/stop/edit/show/delete existing), logout of Thingsboardlogic and delete profile with saved Watcher on Thingsboardlogic

### Add Watcher
Fill out data of new Watcher

### Edit Watcher
Fill out new data of existing Watcher

### Show Watcher
Show data of existing Watcher

## Built With

* [Spring Boot](https://projects.spring.io/spring-boot/) - Web application framework for backend
* [Apache Cassandra](http://cassandra.apache.org/) - Database
* [Maven](https://maven.apache.org/) - Dependency Management
* [Angular2](https://angular.io/) - Web application framework for frontend
* [Bootstrap](http://getbootstrap.com/) - HTML, CSS, and JS framework

## Useful Tutorials
* [Angular2 and Spring Boot: Getting Started](https://blog.jdriven.com/2016/12/angular2-spring-boot-getting-started/) - A tutorial about setting up a Spring Boot project together with Angular2
* [Building an Application with Spring Boot](https://spring.io/guides/gs/spring-boot/) - A tutorial about Spring Boot
* [Cassandra Tutorial](https://www.tutorialspoint.com/cassandra/) - A tutorial about Apache Cassandra
* [Tutorial: Tour Of Heroes](https://angular.io/docs/ts/latest/tutorial/) - A tutorial about Angular2
* [Bootstrap 3 Tutorial](https://www.w3schools.com/bootstrap/) - A tutorial about Bootstrap

## Future Work
Some useful features to advance Thingsboardlogic:
* Implement session management with JWT (Json Web Token)
* Implement security with Spring Security and Angular Security
* Implement seperate database
* Implement notifications (e.g. on Watcher error, etc.) on overview page and for example as e-mail, etc.
* Let user edit Thingsboard server connection data
* Let user connect to more than one Thingsboard server with the same user data
* Let user react on Watcher errors with second logic unit
* Let user input more complex logic (e.g. depent from results from other Watcher)
* Show detailed error messages on error page
* Show more detailed infos about Watcher (responses from Watcher inputs and outputs, error messages, uptime, downtime, etc.) on separatre Watcher page
* ...

## Author

* **Peter Holzer** - [e1425797@student.tuwien.ac.at](mailto:e1425797@student.tuwien.ac.at) - [GitHub Profile](https://github.com/PeHo89) - Student at Vienna University of Technology with field of study 'Information and Software Engeneering' (bachelor degree course)