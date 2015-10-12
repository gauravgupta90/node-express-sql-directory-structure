Basic Express.js scafolded directory structure with SQL db industry ready
===============================================================

Basic folder-structure for a large-scale Node.js project. Clone and start development quickly with SQL integration


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

###Create Table

	CREATE TABLE `testDatabase`.`user` (
	  `userid` VARCHAR(20) NULL COMMENT '',
	  `user_name` VARCHAR(45) NOT NULL COMMENT '',
	  PRIMARY KEY (`userid`)  COMMENT '');


### API

###### *POST request / Create user*

    http://localhost:8000/user

    Body:

    	{
			"userid":"gauravgupta90",
			"user_name":"gauravgupta"
		}

###### *Get request / Get user*

    http://localhost:8000/user?userid=gauravgupta90