var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demo'
});

var rs = '';

connection.connect();

connection.query('SELECT * FROM notes', function (err, rows, fields) {
  if (err) throw err

  rs = ' [mysql]: ', rows[0];
});

connection.end();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond ' + rs);
});

module.exports = router;
