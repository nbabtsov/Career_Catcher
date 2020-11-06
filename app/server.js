// const express = require('express');
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//     res.send('Hello World, from express');
// });
// app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

var mysql = require('mysql')
var con = mysql.createConnection({
    host: 'localhost', //'coms-319-t21.cs.iastate.edu',
    user: 'root',
    password: 'root',//'comsVM@319',
    database: 'CareerCatcher'
})

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM USER_TABLE", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        // con.end(function(err) {
        //     if (err) {
        //         return console.log(err.message);
        //     } else{
        //         console.log("Close connection!");
        //     }
        // });
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