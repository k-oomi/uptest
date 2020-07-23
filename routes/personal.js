var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.login != undefined){
    let file = [];
    let fileName = fs.readdirSync("public/csv");
    for(let i in fileName){
      if (req.session.login.id = fileName[i].substr(0,req.session.login.id.length)){
        file.push = fileName[i]
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
