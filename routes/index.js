var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("showindex");
  res.render('index', { title: 'GET Twitter Timeline!' });
});

module.exports = router;
