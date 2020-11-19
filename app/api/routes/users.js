
var express = require('express');
var db = require('./db');
var router = express.Router();
var userDatabase = [];

router.post('/', function(req, res, next) {
  let clientData = req.body;
  let i;
  let flag = false;
  userDatabase.map(usersort);
  function usersort(user, index) {
    if (user.email.localeCompare(clientData.email) === 0 && user.password.localeCompare(clientData.password) === 0) {
      console.log("correct");
      i = index;
      flag = true;
    }
  }
  if(flag === true) {
    db.query('Select * from USER_TABLE', function (err, result, fields) {
      if (err) throw err;
      // console.log("db result" + JSON.stringify(result));
      Object.keys(result).forEach(function(key) {
        var row = result[key];
        userDatabase.push(row);
      });
      // console.log("localStorage" + JSON.stringify(result));
    });
    res.send(userDatabase[i].username);
  }else{
    res.send(false);
  }

});

router.post('/signup', function(req, res, next){
  let clientData = req.body;
  let email = clientData.email;
  let password = clientData.password;
  let jobID = clientData.job;
  let username = clientData.name;
  console.log(clientData);


  let flag = false;
  userDatabase.map(submitHelper);
  function submitHelper(user) {
    if (user.email.localeCompare(clientData.email) === 0) {
      console.log("correct");
      flag = true;
    }
  }

  if(flag === false) {
    console.log(username);

    db.query('INSERT INTO USER_TABLE(email, password, JobID, username) VALUES(?,?,?,?)', [email, password, jobID, username], function (err, rows, fields) {
      if (err) throw err;
      else{
        userDatabase.push(clientData);
        res.send(userDatabase[userDatabase.length-1].username);
      }

    });

  }
  else{
    res.send(false);
  }


});


module.exports = router;
