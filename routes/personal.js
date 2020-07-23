var express = require('express');
var router = express.Router();
var fs = require('fs');
let file = [];


/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.login != undefined){    
    let fileName = fs.readdirSync("public/csv");
    for(let i in fileName){
      var cut_str = '_';
      var index   = fileName[i].indexOf(cut_str);
      if (req.session.login.id == fileName[i].substr(0,index) ){
         file.push(fileName[i]);
      }    
    };
      let opt = {
        data: req.session.login,
        file: file
      };
        
      res.render('personal',opt);
    
  }else{
    res.redirect('/');
  }


  
});

module.exports = router;
