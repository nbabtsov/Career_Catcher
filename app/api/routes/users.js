
var userDatabase = [{name: "temp", email: "temp1@test", password: "1"}, {name: "temp2", email: "temp2@test", password: "2",}];
var express = require('express');
var router = express.Router();

/* Handle login requests. */
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
    res.send(userDatabase[i].name);
  }
  res.send(false);
});

/*Handle Signup requests*/
router.post('/signup', function(req, res, next){

  let clientData = req.body;
  let flag = false;
  userDatabase.map(submitHelper);
  function submitHelper(user) {
    if (user.email.localeCompare(clientData.email) === 0) {
      console.log("correct");
      flag = true;
    }
  }
  if(flag === false) {
    userDatabase.push(clientData);
    res.send(userDatabase[userDatabase.length-1].name);
  }
  res.send(false);

});

module.exports = router;
