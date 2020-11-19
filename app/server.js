
var mysql = require('mysql')
var con = mysql.createConnection({
    host: 'coms-319-t21.cs.iastate.edu', //local
    user: 'admin', //root
    password: 'password', //whatever
    database: 'CareerCatcher'
})

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM USER_TABLE", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

    });
    con.query("SELECT * FROM JOB_TABLE", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        con.end(function(err) {
            if (err) {
                return console.log(err.message);
            } else{
                console.log("Close connection!");
            }
        });
    });
});