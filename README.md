Steps to run this project
1) Start server by using command like C:\Personal\Jitendra\workspace\mean\meanAng4 node server.js
2) Start mongo db
	a) open cmd
	b) Go to dir C:\Program Files\MongoDB\Server\3.4\bin 
	c) run command like mongod
	d) Either open robomongo and connect to collection named as contactList or follow below steps
	e) Open new cmd
	f) Go to dir C:\Program Files\MongoDB\Server\3.4\bin 
	g) run command like mongo
3) open browser and run application by using http://localhost:3000. Now only myContact module has crud operation

Note1: Interaction between websocket, NodeJs, AngularJs and Kafka is done to get real time feed from Kafka. To test it click on Contact->Websocket test

Note2: Application cache is implemented by using PWA. Important files for this are ngsw-config.json, manifest.json, AppModule.ts, AppComponent.ts, LogService.ts. It works only in Production env i.e. if it is build by using "ng build --prod"

Setup Kafka in Local env:

1) Download the 2.0.0 release of Kafka and un-tar it.
2) Go to the directory of your unzipped kafka folder like 		    C:\Kafka2.12
3) Start Zookeeper: Open cmd and go to the path mentioned in 2nd step and run command like "bin\windows\zookeeper-server-start.bat config\zookeeper.properties"
4) Start Kafka server: Open cmd and go to the path mentioned in 2nd step and run command like "bin\windows\kafka-server-start.bat config\server.properties"
5) Start Kafka topic: Open cmd and go to the path mentioned in 2nd step and run command like "bin\windows\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic jitendraTopic1"
6)Start producer on the topic named as "jitendraTopic1": Open cmd and go to the path mentioned in 2nd step and run command like "bin\windows\kafka-console-producer.bat --broker-list localhost:9092 --topic jitendraTopic1"


# MeanAng4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
