var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.login != undefined){
      let opt = {
        data: req.session.login
      };
        
      res.render('personal',opt);
    
  }else{
    res.redirect('/');
  }


  
});

module.exports = router;
