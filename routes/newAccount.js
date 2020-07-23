var express = require('express');
var router = express.Router();
var dbdo = require('../db/exec.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    
    
  
  res.render('newAccount');
});


//POST
router.post('/', async function(req, res, next) {
    let mail = req.body.email;
    let pass = req.body.password;
    let sql = "insert into users (mailadd,password) values('" + mail + "','" + pass + "')";
    await dbdo.exec(sql);
    res.render('common');
});

module.exports = router;