var express = require('express');
var router = express.Router();

const fs = require('fs');
const csv = require('csv');
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.render('common',{});
});

module.exports = router;
