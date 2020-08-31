var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.login != undefined){  
    let file = [];  
    let UserId = req.session.login.id;
    let dir = "public/csv" + UserId;
    let fileName = fs.readdirSync(dir);
    // for(let i in fileName){
    //   var cut_str = '_';
    //   var index   = fileName[i].indexOf(cut_str);
    //   if (req.session.login.id == fileName[i].substr(0,index) ){
    //      file.push(fileName[i]);
    //   }    
    // };
      let opt = {
        data: req.session.login,
        file: fileName
      };
        
      res.render('personal',opt);
    
  }else{
    res.redirect('/');
  }


  
});

module.exports = router;
