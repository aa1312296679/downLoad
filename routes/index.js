var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '测试下载' });
});

router.get('/download',function (req, res, next) {
    //获取下载的请求
    var req=req.query;
    if(req.type=='zip'){
          //download的根目录以当前项目文件夹为根目录
          //不以文件所在目录为根目录
          res.download("./public/dowloadFiles/jd.rar");
    }else {
         res.send("下载失败，请重新下载");
    }
});

module.exports = router;
