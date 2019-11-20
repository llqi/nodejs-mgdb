const express = require("express");
const db = require('mongoose');
let api = express.Router();
const UserModel = require("../db/model/user.js");
const db_add = 'mongodb+srv://codedance98:liliangqi1@cluster0-cjz8o.mongodb.net/test?retryWrites=true&w=majority';
// gui: https://huyinjie.xyz/2018/05/05/%E5%8F%AF%E8%A7%86%E5%8C%96%E7%AE%A1%E7%90%86MongoDB-Atlas/
// ip check: https://www.toolsdaquan.com/ipcheck/
api.post("/create", function(req, res) {
    let t = {
        name:req.body.name,
        age:req.body.age,
        sex:req.body.sex,
        email:req.body.email,
        instructions:req.body.instructions
    };
    db.connect(db_add);
    var user = new UserModel({
        name:req.body.name,
        age:req.body.age,
        sex:req.body.sex,
        email:req.body.email,
        instructions:req.body.instructions
    });
    user.save(function (err) {
        if (err) {
            console.log("Error:" + err.message);
        }
        else {
            res.json({
                ...t,
                msg:'保存成功'
            });
        }
    });
    
});
module.exports = api;