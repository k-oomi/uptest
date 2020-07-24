var express = require('express');
var router = express.Router();

var dbdo = require('../db/exec.js');
var dbget = require('../db/get.js');
var dball = require('../db/all.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    let opt ={
        message: null,
        mail: null
    };
    
    
  
  res.render('newAccount',opt);
});


//POST
router.post('/', async function(req, res, next) {
    let mail = req.body.email;
    let pass = req.body.password;
    let sql = "select * from users where mailadd = '" + mail + "'";
    let record = await dbget.getRow(sql);
    if (record != undefined){
        let opt ={
            message:"重複エラー",
            mail: record.mailadd
        };
        res.render('newAccount',opt);       
    }else{
        sql = "insert into users (mailadd,password) values('" + mail + "','" + pass + "')";
        await dbdo.exec(sql);
        let opt ={
            message:"登録完了",
            mail: mail
        };
        res.render('newAccount',opt);

    }


});

module.exports = router;