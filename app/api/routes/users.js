
var express = require('express');
var db = require('./db');
var router = express.Router();
var userDatabase = [];



db.query('Select * from USER_TABLE', function (err, result, fields) {
  if (err) throw err;
  console.log("db result" + JSON.stringify(result));
  Object.keys(result).forEach(function(key) {
    var row = result[key];
    userDatabase.push(row);
  });
  console.log("localStorage" + JSON.stringify(result));
});

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
    res.send(userDatabase[i].username);
  }else{
    res.send(false);
  }

});




module.exports = router;
