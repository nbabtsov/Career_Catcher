


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
res.send('API is working properly');
});

router.get('/users', function(req, res, next) {
    res.send(userData[0].name);
});

module.exports = router;