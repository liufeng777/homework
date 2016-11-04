var express = require('express');
var router = express.Router();
const createConn = require("../sources/MySqlConnection");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/delete", function (req, res) {
  var conn = createConn();
  conn.connect(function (err) {
    if (!err) {
      // let sql = `DELETE FROM \`users\` WHERE \`id\`=${req.query.id}`;
      //
      // conn.query(sql, function (err) {
      //     if (!err) {
      //         res.json({state: 1});//删除成功
      //     } else {
      //         res.json({state: 3});//执行删除任务时失败
      //     }
      // });

      //防止被攻击？是占位符，后面[]传入占位符的内容
      conn.query("DELETE FROM `users` WHERE `id`=?", [req.query.id], function (err) {
        if (!err) {
          res.json({state: 1});//删除成功
        } else {
          res.json({state: 3});//执行删除任务时失败
        }
      });
    } else {
      res.json({state: 2});//删除失败
    }
  });

});

router.post("/adduser", function (req, res) {
  var conn = createConn();
  conn.connect(function (err) {
    if (!err) {
      conn.query("INSERT INTO users (user,password,age) VALUES (?,?,?)",
          [req.body.user, req.body.pass, req.body.age], function (err) {
            if (!err) {
              res.json({state: 1});//成功
            } else {
              res.json({state: 5});//执行添加语句失败
              console.log(err);
            }
          });
    } else {
      res.json({state: 4});//添加失败
    }
  })
});
router.post("/checkuser", function (req, res) {
  var conn = createConn();

  conn.connect(function (err) {

    if (!err) {

      conn.query("SELECT password FROM users WHERE user=?",
          [req.body.user], function (err,data) {
            if (!err) {

              if(data[0].password==req.body.password){
                console.log('登录成功');
                res.json({state: 1});//成功

              }else{
                console.log('密码错误');
              }

            } else {
              res.json({state: 5});//执行添加语句失败
              console.log(err);
              console.log('登录失败');
            }
          });
    } else {
      res.json({state: 4});//添加失败
      console.log(err);
      console.log('登录失败');
    }
  })
});

module.exports = router;
