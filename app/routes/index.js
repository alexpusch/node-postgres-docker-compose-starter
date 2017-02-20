var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var pg = require('pg');

  // // instantiate a new client
  // // the client will read connection information from
  // // the same environment variables used by postgres cli tools
  // var client = new pg.Client();

  // // connect to our database
  // client.connect(function (err) {
  //   if (err) throw err;

  //   // execute a query on our database
  //   client.query('SELECT $1::text as name', ['brianc'], function (err, result) {
  //     if (err) throw err;

  //     // just print the result to the console
  //     console.log(result.rows[0]); // outputs: { name: 'brianc' }

  //     res.render('index', { title: 'Express' });

  //     // disconnect the client
  //     client.end(function (err) {
  //       if (err) throw err;
  //     });
  //   });
  // });

  res.render('index', { title: 'Express' });

});

module.exports = router;
