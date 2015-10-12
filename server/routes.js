// Load modules

var User = require('./controller/user');


// API Server Endpoints
module.exports = function(app){

  app.get('/', function(req, res) {
        res.render('index');
    });

  app.route('/user')
     .get(User.getUser)
     .post(User.createUser);
 
}
