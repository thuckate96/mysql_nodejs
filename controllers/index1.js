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

router.route("/api/capacity").get((req, res) => {

  var  data = [
      {
        employee_id:1,
        employee_name:'Nguyen Huy Van',
        skill:[
          {
            skill_name:'C#',
            skill_point:96
          },
          {
            skill_name:'Java',
            skill_point:80
          },
          {
            skill_name:'DB',
            skill_point:70
          },
          {
            skill_name:'Ngôn ngữ',
            skill_point:50
          },
          {
            skill_name:'Thái độ',
            skill_point:90
          },
          {
            skill_name:'IQ',
            skill_point:80
          }
        ]
      }
    ]

  let user = 'Vi Van Thuc';
  let uid = req.query.uid;
  if(uid === '1')
  res.send({status: "success", data: data});
  else res.json({status: "faild", data: []})

});

router.route("/api/history").get((req, res) => {

  var dataT = {
      status: "success",
      technical_id: 1,
      technical_name: "java",
      skill:[
        {
          skillName: 'java',
          skill_month: 7,
          skill_point: 98
        },
        {
          skillName: 'java',
          skill_month: 8,
          skill_point: 87
        },
        {
          skillName: 'java',
          skill_month: 9,
          skill_point: 67
        },
        {
          skillName: 'java',
          skill_month: 10,
          skill_point: 97
        },
        {
          skillName: 'java',
          skill_month: 11,
          skill_point: 67
        },
        {
          skillName: 'java',
          skill_month: 12,
          skill_point: 89
        },
        {
          skillName: 'SQL',
          skill_month: 7,
          skill_point: 67
        },
        {
          skillName: 'SQL',
          skill_month: 8,
          skill_point: 98
        },
        {
          skillName: 'SQL',
          skill_month: 9,
          skill_point: 49
        },
        {
          skillName: 'SQL',
          skill_month: 10,
          skill_point: 87
        },
        {
          skillName: 'SQL',
          skill_month: 11,
          skill_point: 56
        },
        {
          skillName: 'SQL',
          skill_month: 12,
          skill_point: 78
        },
        {
          skillName: 'IQ',
          skill_month: 7,
          skill_point: 78
        },
        {
          skillName: 'IQ',
          skill_month: 8,
          skill_point: 67
        },
        {
          skillName: 'IQ',
          skill_month: 9,
          skill_point: 98
        },
        {
          skillName: 'IQ',
          skill_month: 10,
          skill_point: 87
        },
        {
          skillName: 'IQ',
          skill_month: 11,
          skill_point: 56
        },
        {
          skillName: 'IQ',
          skill_month: 12,
          skill_point: 76
        },
        {
          skillName: 'English',
          skill_month: 7,
          skill_point: 98
        },
        {
          skillName: 'English',
          skill_month: 8,
          skill_point: 45
        },
        {
          skillName: 'English',
          skill_month: 9,
          skill_point: 98
        },
        {
          skillName: 'English',
          skill_month: 10,
          skill_point: 87
        },
        {
          skillName: 'English',
          skill_month: 11,
          skill_point: 67
        },
        {
          skillName: 'English',
          skill_month: 12,
          skill_point: 98
        },
        {
          skillName: 'Thái độ',
          skill_month: 7,
          skill_point: 56
        },
        {
          skillName: 'Thái độ',
          skill_month: 8,
          skill_point: 87
        },
        {
          skillName: 'Thái độ',
          skill_month: 9,
          skill_point: 77
        },
        {
          skillName: 'Thái độ',
          skill_month: 10,
          skill_point: 67
        },
        {
          skillName: 'Thái độ',
          skill_month: 11,
          skill_point: 87
        },
        {
          skillName: 'Thái độ',
          skill_month: 12,
          skill_point: 98
        },
      ]
    }


  let dataHis = {
    "Month": ["July", "August", "September", "October", "November", "December"],
    "Coding": [67, 87, 79, 89, 94, 56],
    "IQ": [45, 67, 89, 76, 90, 88],
    "Database": [55, 67, 78, 97, 87, 89],
    "Attitude": [76, 69, 99, 87, 69, 89],
    "Language": [65, 87, 78, 89, 91, 88]
  }
  let uid = req.query.uid;
  let from = req.query.from;
  let to = req.query.to;

  if(uid === '1'){
    res.json({data: dataT})
  }else {
    res.json({status: "false", data: []})
  }
});

module.exports = router;
