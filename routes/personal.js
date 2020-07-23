var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.login != undefined){
    
    let fileName = fs.readdirSync("public/csv");

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
