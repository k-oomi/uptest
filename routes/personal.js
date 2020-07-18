var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.login != undefined){
    if (req.session.login[0] > 0) {
      res.render('personal', {});
    }
  }else{
    res.redirect('/');
  }
res.render('personal', {});
  
});

module.exports = router;
