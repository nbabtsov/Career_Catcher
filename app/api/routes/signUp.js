
var express = require('express');
var db = require('./db');
var router = express.Router();
var userDatabase = [];

/*Handle Signup requests*/


router.post('/', function(req, res, next){
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
                // console.log(res);
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
