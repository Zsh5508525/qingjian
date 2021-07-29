var express = require('express');
var app = express();
 
//解决跨域问题
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-pOWERED-By","3.2.1");
    res.header("Content-Type","application/json;charset=utf-8");
    next();
})

app.get('/xxx',function(req,res){
    

    var lists = [
        {
            type:'第一类商品',
            shops:[
                {id:1,num:1,desc:'商品1',title:'这是第一个商品',price:5.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                {id:2,num:2,desc:'商品2',title:'这是第二个商品',price:15.00,originPrice:30.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
            ]
        },
        {
            type:'第二类商品',
            shops:[
                {id:1,num:1,desc:'商品1',title:'这是第一个商品',price:5.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                {id:2,num:2,desc:'商品2',title:'这是第二个商品',price:15.00,originPrice:30.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                {id:3,num:3,desc:'商品3',title:'这是第三个商品',price:105.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
            ]
        },
         {
            type:'第三类商品',
            shops:[
                {id:1,num:1,desc:'商品1',title:'这是第一个商品',price:5.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                {id:2,num:2,desc:'商品2',title:'这是第二个商品',price:15.00,originPrice:30.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                {id:3,num:3,desc:'商品3',title:'这是第三个商品',price:105.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
                {id:4,num:4,desc:'商品4',title:'这是第四个商品',price:1005.00,thumb:'https://img01.yzcdn.cn/vant/ipad.jpeg'},
            ]
        },
    ]
    res.send(lists)
});

app.listen(1111,function(){
    console.log('1111,轻简gogo')
})