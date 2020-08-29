var express = require('express');
var router = express.Router();

var dbget = require('../db/get.js');
var dball = require('../db/all.js');
var dbdo = require('../db/exec.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('login',{});
});

router.post('/', async function(req, res, next) {

    let email = req.body.email;
    let pass = req.body.password;

    let sql = "select * from users where mailadd='" 
        + email + "' and password='" + pass + "'";
    let record = await dbget.getRow(sql);
    if (record != undefined){
        
        req.session.login = record;
        
        res.redirect('/personal');
    }
   
    res.redirect('/newAccount');
});

module.exports = router;