//file này giúp tạo database và tên bảng nếu chưa tồn tại
//dùng module mysql
var mysql = require("mysql");
//tạo kết nối đến cơ sở dữ liệu
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	port: "3306"
});
//Thực hiện tạo cơ sở dữ liệu và tạo bảng nếu chưa tồn tại
connection.query('CREATE DATABASE IF NOT EXISTS ngocthai', function(err){
	if(err) console.log("khong tao duoc database");
	connection.query('USE ngocthai', function(err){
		if (err) console.log("Khong su dung duoc csdl");
		connection.query('CREATE TABLE IF NOT EXISTS User(id int(11) not null auto_increment primary key,'
																										 +'username varchar(50) not null ,'
																										 +'email varchar(50) not null,'
																										 +'address varchar(50) not null,'
																										 +'hobbies varchar(50) not null'
																										 +')',
                                                  		function(err){
                                                  			if (err ) console.log("Khong tao duoc bang User ");
                                                  		})
	})
})
module.exports = connection ;
