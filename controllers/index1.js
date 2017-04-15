//contrllers index1 xử lý nhiệm vụ điểu hướng đến trang view index.ejs
//vẫn phải require('express') để dùng các module của express
var express  = require("express");
//Khai báo một cái route trong mudule express để làm đường dẫn
var router   = express.Router();
//khi có một request từ phía client. cụ thể là từ trang localhost:5000
//thì lập tức nó sẽ điều hướng đến trang index.ejs 
router.route("/")
.get(function(req, res){
  res.render("index");
})

module.exports = router;
