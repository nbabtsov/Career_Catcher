
var express = require('express');
var db = require('./db');
var router = express.Router();
var userDatabase = [];
var saveDatabase = [];
var jobDatabase = [];
db.query('Select * from USER_TABLE', function (err, result, fields) {
  if (err) throw err;
  // console.log("db result" + JSON.stringify(result));
  Object.keys(result).forEach(function(key) {
    var row = result[key];
    userDatabase.push(row);
  });
  // console.log("localStorage" + JSON.stringify(result));
});

db.query('Select * from SAVE_TABLE', function (err, result, fields) {
  if (err) throw err;
  // console.log("db result" + JSON.stringify(result));
  Object.keys(result).forEach(function(key) {
    var row = result[key];
    saveDatabase.push(row);
  });
  // console.log("localStorage" + JSON.stringify(result));
});
db.query('Select * from JOB_TABLE', function (err, result, fields) {
  if (err) throw err;
  // console.log("db result" + JSON.stringify(result));
  Object.keys(result).forEach(function(key) {
    var row = result[key];
    jobDatabase.push(row);
  });
  // console.log("localStorage" + JSON.stringify(result));
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
    console.log("here");
    db.query('Select * from USER_TABLE', function (err, result, fields) {
      if (err) throw err;
      // console.log("db result" + JSON.stringify(result));
      Object.keys(result).forEach(function(key) {
        var row = result[key];
        userDatabase.push(row);
      });
      // console.log("localStorage" + JSON.stringify(result));
    });
    //console.log(userDatabase[i].username);
    req.session.user = userDatabase[i].username;
    req.session.save();
   // if(!req.session.user) req.session.user = userDatabase[i].username;
    console.log(req.session.user);
    res.send(userDatabase[i].username);
  
  }else{
    res.send(false);
  }

});
//TODO: "add a job to users saved jobs"
router.post('/addSavedJob', function(req, res, next){ 
  let clientData = req.body;
  let user = clientData.username;
  let JobID= clientData.JobID;
  db.
  db.query('INSERT INTO SAVE_TABLE(user, SavedJobID) VALUES(?,?)', [user, JobID], function (err, rows, fields) {
    if (err) throw err;
    else{
      saveDatabase.push(clientData);
      res.send(saveDatabase[saveDatabase.length-1].username);
      res.send(saveDatabase[saveDatabase.length-1].jobID);

    }

  });

});
//TODO add function to add any job not in databse to database on "Save"
router.post('/addNewJobToDataBase', function(req, res, next){
  let clientData = req.body;
  let ID = clientData.ID;
  let JobTitle= clientData.JobTitle;
  let jobGiver  = clientData.jobGiver;
  let location = clientData.location;
  let payment = clientData.payment;
  let description = clientData.description;
  
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
router.get('/getUser', function(req, res, next) { 
  //if(req.session.user)
  console.log(req.session.user);
  res.send(req.session.user);
 // else res.send('false');
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
