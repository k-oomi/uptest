var express = require('express');
var router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req,file,cd){
    let UserId = req.session.login.id;

    cd(null, 'public/csv' + UserId + '/')
  },
  filename: function(req, file, cd){
    //第2引数でファイル名指定
    cd(null, file.originalname)
  }
});
// const upload = multer({dest:'public/csv/'});
const upload = multer({storage: storage});

/* GET home page. */
///'/'はこのupload.js自身
router.get('/', function(req, res, next) {
  let opt = {
    message:'',
  }

  res.render('upload',opt);//ejsのファイル名
});

router.post('/',upload.single('file'),function(req,res){
  //アップロードされたファイルをhtmlで表示するためにパスを渡す
  //staticのベースがuploadsなので、imagesにあるファイルを指定するには
  ///images/ファイル名とする
     

  let opt = {
    message:'アップロード成功',

  }
  res.render('upload',opt);
})

module.exports = router;