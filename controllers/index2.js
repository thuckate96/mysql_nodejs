//contrller này làm việc với api của user
var express  = require("express");
//Khai báo router để chỉ đường truy cập đến bất cứ nơi nào của trang web
var router   = express.Router();
//require module mysql để làm việc với mysql
var mysql = require("mysql");
//tạo một kết nối đến database của mysql
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
  database: "ngocthai",
  port: "3306"
});
//route("/") ở controller này tương đương với câu lệnh localhost:5000/api/user
//và nó có chức năng đẩy dữ liệu dạng json lên và xử lý các request từ phía client gửi xuống ...
//ở đây bao gồm phuong thức post từ phía client gửi request xuống yêu cầu insert một thông tin người dùng
router.route("/")
//vào cơ sở dữ liệu
.get(function(req, res){
  connection.query('select *from user', function(err, data){
    res.json(data);
  })
})
.post(function(req, res){
  var user = {username: req.body.username, email: req.body.email, address: req.body.address, hobbies: req.body.hobbies};

  connection.query("insert into user set ?",user, function(err){
    if(err) console.log("insert khong thanh cong");
    console.log("insert thành công");
  })

})
module.exports = router;
