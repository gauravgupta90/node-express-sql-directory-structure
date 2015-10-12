'use strict';

var connection = require('../config/db').connection;

exports.createUser = function (req,res,next) {
    var data = req.body;

    var query = "INSERT INTO testDatabase.user " +
            "(userid, user_name)" +
            "VALUES (?,?)";

        var value = [data.userid, data.user_name];

        connection.query(query, value, function(err, result) {
        	if (err) {
                console.log(err);
                return res.json("There was some error.").status(400);
            } else {
            	return res.json(result);
            }

        });
};

exports.getUser = function (req,res,next) {
    var userid = req.query.userid;

    if(!userid) return res.json("user name doesn't exist").status(400);
    else{
    	var query = "SELECT * FROM testDatabase.user " +
            "WHERE userid='" + userid+"'";

        connection.query(query, function(err, result) {
        	if (err) {
                console.log(err);
                return res.json("There was some error.").status(400);
            } else {
            	return res.json(result);
            }

        });

    }
};
