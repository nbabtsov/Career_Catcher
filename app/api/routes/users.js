
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
router.post('/checkJobInDB', function(req, res, next){ 
  let clientData = req.body;
  let JobTitle= clientData.JobTitle;
  let jobGiver  = clientData.jobGiver;
  let location = clientData.location;
  let payment = clientData.payment;
  let description = clientData.description;

  let flag = false;
  jobDatabase.map(submitHelper);
  function submitHelper(job) {
    if (job.JobTitle.localeCompare(JobTitle) === 0 && job.jobGiver.localeCompare(jobGiver) === 0 && job.location.localeCompare(location) === 0 && job.payment.localeCompare(payment) === 0 && job.description.localeCompare(description) === 0) {
      console.log("job in database already");
      flag = true;
      
    }
    if(flag == false) {
      console.log("job not in database (1)");
      res.send("false"); }
    else res.send(true);
  }

});
//"add to a users saved jobs"
router.post('/addSavedJob', function(req, res, next){ 
  
  /*let clientData = req.body;
  let user = clientData.username;
  let JobTitle= clientData.JobTitle;
  let jobGiver  = clientData.jobGiver;
  let location = clientData.location;
  let payment = clientData.payment;
  let description = clientData.description;*/
  let clientData = req.body;
  let user = clientData.username;
  let JobID= clientData.JobID;
 /* saveDatabase.map(getJobID);
  function getJobID(job) {
    if (job.JobTitle.localeCompare(JobTitle) === 0 && job.jobGiver.localeCompare(jobGiver) === 0 && job.location.localeCompare(location) === 0 && job.payment.localeCompare(payment) === 0 && job.description.localeCompare(description) === 0) {
      JobID = job.JobID;
    }
    else console.log("job not in database");
  }
*/
  let flag = false;
  saveDatabase.map(submitHelper);
  function submitHelper(save) {
    if (save.user.localeCompare(user) === 0 && save.jobID.localeCompare(JobID)===0) {
      console.log("save is already in database");
      flag = true;
    }
  }

  if(flag === false) {
    console.log(JobID + user);
  db.query('INSERT INTO SAVE_TABLE(SaveID, user, SavedJobID) VALUES(?,?,?)', [saveDatabase.length+1, user, JobID], function (err, rows, fields) {
    if (err) throw err;
    else{
      saveDatabase.push(clientData);
      res.send(saveDatabase[saveDatabase.length-1].username);
      res.send(saveDatabase[saveDatabase.length-1].jobID);
      

    }

  });
  }
  else{
    res.send(false);
  }

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
  jobDatabase.map(submitHelper);
  function submitHelper(job) {
    if (job.JobTitle.localeCompare(JobTitle) === 0) {
      console.log("job is already in database (2)");
      flag = true;
    }
  }

  if(flag === false) {
    console.log(jobTitle);

    db.query('INSERT INTO JOB_TABLE(ID, JobTitle , jobGiver, location, payment, description) VALUES(?,?,?,?,?,?)', [jobTable.length, JobTitle , jobGiver, location, payment, description], function (err, rows, fields) {
      if (err) throw err;
      else{
        console.log("adding job !")
        jobDatabase.push(clientData);
        res.send(jobDatabase[jobDatabase.length-1].job);
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
