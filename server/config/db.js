'use strict';

var config = require('./config'),
    mysql = require('mysql');

// connection to MySQL Database

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(config.database);
  connection.connect(function (err){
    if(err){
      console.log("error when connecting to ",config.database.database,err);
      setTimeout(handleDisconnect, 2000);
    }
    else{
      console.log("connected with "+config.database.database+" successfully");
    }
  });

  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {
      console.log('db error', err);
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {  // Connection to the MySQL server is usually
          handleDisconnect();                         // lost due to either server restart, or a
      } else {                                        // connection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
      }
  });
}

handleDisconnect();

exports.connection = connection;
  