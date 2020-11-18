
var userData = [{name: "temp", email: "temp1@test", password: "1"}, {name: "temp2", email: "temp2@test", password: "2",}];
var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {

  let data = req.body;
  let i;
  let flag = false;
  userData.map(usersort);
  function usersort(user, index) {
    if (user.email.localeCompare(data.email) === 0 && user.password.localeCompare(data.password) === 0) {
      console.log("correct");
      i = index;
      flag = true;
    }
  }
  if(flag === true) {
    res.send(userData[i].name);
  }
  res.send(false);
});

router.post('/signup', function(req, res, next){

  let data = req.body;
  let flag = false;
  userData.map(submitHelper);
  function submitHelper(user) {
    if (user.email.localeCompare(data.email) === 0) {
      console.log("correct");
      flag = true;
    }
  }
  if(flag === false) {
    userData.push(data);
    res.send(userData[userData.length-1].name);
    //res.send(data.name);
  }
  res.send(false);

});

module.exports = router;
