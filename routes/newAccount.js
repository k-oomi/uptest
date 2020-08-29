var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check')


var dbdo = require('../db/exec.js');
var dbget = require('../db/get.js');
var dball = require('../db/all.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    let opt ={
        message: null,
        mail: null,
        correctMessage: ''
    };
    
    
  
  res.render('newAccount',opt);
});


//POST
router.post('/', [
    check('email')
    .isEmail().withMessage('メールアドレスを入力して下さい'),
check('password')
    .isLength({ min: 4 }).withMessage('パスワードは5文字以上です')
    .matches(/\d/).withMessage('パスワードに数値を含めて下さい')
],async function(req, res, next) {
    const errors = validationResult(req)

    let mail = req.body.email;
    let pass = req.body.password;
    if(!errors.isEmpty()){
        const errors_array = errors.array()
        let opt ={
            message:errors_array,
            mail: null,
            correctMessage: '',
        };
        res.render('newAccount',opt);
    }else{
        let sql = "select * from users where mailadd = '" + mail + "'";
        let record = await dbget.getRow(sql);
        if (record != undefined){
            // errors_array.push("重複エラー");
            const errormsg = [{msg: '重複エラー'}];
            let opt ={
                message:errormsg,
                mail: record.mailadd,
                correctMessage: ''
            };
            res.render('newAccount',opt);       
        }else{
            sql = "insert into users (mailadd,password) values('" + mail + "','" + pass + "')";
            await dbdo.exec(sql);
            let opt ={
                message:'',
                mail: mail,
                correctMessage: '登録完了'
            };
            res.render('newAccount',opt);
    
        }


    }
        
    


});

module.exports = router;