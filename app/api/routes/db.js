var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'coms-319-t21.cs.iastate.edu',
    user: 'admin',
    password: 'password',
    database: 'CareerCatcher'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;