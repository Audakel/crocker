var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var subdomain = require('express-subdomain');








router.get('/', function(req, res) {
    res.send('Welcome to our main API!');
});

module.exports = router;
