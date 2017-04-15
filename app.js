//lưu ý tại file app.js nếu cần require các module của express để sử dụng thì
//ta cần phải install nó .bằng cách : tại cửa sổ dòng lệnh trỏ đến thư mục chứa file package.json
//gõ câu lện npm install tên_module --save ... ví dụ cần sử dụng body-parser thì ta gõ npm isntall body-parser --save
//require module express để sử dụng các chức năng có trong module express
var express    = require("express");
//dùng biến app để thay thế  express
//Lưu ý biến app phải trùng với tên file app.js
var app 	   = express();
//require body-parser để mã hóa url, làm việc với dữ liệu dạng json ...
var bodyParser = require("body-parser");
//require module morgan để tạo log để gủi request đến server
var morgan 	   = require("morgan");
//lấy đường dẫn tới thư mục chứa file app.js
var path       = require("path");
//require file mydatabase.js ở trong folder models .
//file mydatabase.js có nhiệm vụ tạo tên cơ sở dữ liệu , tạo bảng , nếu chưa tồn tại
var db = require('./models/mydatabase');

//tạo cổng làm việc cho node js . ở đây là 5000
 var port = process.env.PORT||5000;
//sử dụng module morgan
app.use(morgan('dev'));
//sử dụng bodyParser để mã hóa dữ liệu
app.use(bodyParser.urlencoded({extended: true}));
//sử dụng bodyParser để làm việc với dữ liệu dạng json
app.use(bodyParser.json());

//sét template hiển thị là ejs . nó tương đương với html .
//Nghĩa là sau này thay vì làm việc với file html thì ta làm việc với file ejs
app.set("view engine", "ejs");
//sét thư mục views dùng để chứa template ejs .
app.set("views", path.join(__dirname, "views"));

//contrllers
//Khai báo hai controller .1 là controller index1 chuyên sử lý điều hướng đến file index.ejs (file view )

var index1 = require("./controllers/index1");
//index2 là controller của api user
var index2 = require("./controllers/index2");
//sử dụng / này trên browser tương đương với localhost:5000 cho controller index1 xử lý
app.use("/", index1);
//sử dụng /api/user này trên browser tương ứng với localhost:5000/api/user do contrller index2 xử lý
app.use("/api/user", index2);

//server làm việc tại cổng 5000
app.listen(port);
console.log("Server listenning on port "+port);
