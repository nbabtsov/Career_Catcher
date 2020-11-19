
var express = require('express');
var db = require('./db');
var router = express.Router();
var userDatabase = [];

/*Handle Signup requests*/
router.post('/', function(req, res, next){


    let clientData = req.body;
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
        userDatabase.push(clientData);
        res.send(userDatabase[userDatabase.length-1].username);

        db.query('INSERT INTO USER_TABLE(email, password, JobID, username) VALUES(?,?,?,?)', clientData, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    }
    else{
        res.send(false);
    }


});

module.exports = router;
