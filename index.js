var http=require('http');
var url=require('url');
var querystring=require('querystring');
var fs=require('fs');
const express = require('express');
const app=express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    fs.readFile('index.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
            res.end();
        }
    });
});
app.listen(PORT);
console.log(PORT);