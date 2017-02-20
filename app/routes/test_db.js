var express = require('express');
var pg = require('pg');

var router = express.Router();

router.get('/', function(req, res, next) {
  var client = new pg.Client({
    user: 'postgres', //env var: PGUSER
    database: 'postgres', //env var: PGDATABASE
    password: 'postgres', //env var: PGPASSWORD
    host: 'db', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
  });

  client.connect(function (err) {
    if (err) throw err;

    client.query('SELECT $1::text as db', ['works'], function (err, result) {
      if (err) throw err;

      res.json({ result: result.rows });

      client.end(function (err) {
        if (err) throw err;
      });
    });
  });
});

module.exports = router;
