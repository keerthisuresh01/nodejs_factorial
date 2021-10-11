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
    
        }
    })
})
app.get('/fac',(req,res)=>{
    var query=url.parse(req.url).query;
    var n=querystring.parse(query)["number"];
    console.log(n);
    res.write("<h5>The url of page is : "+req.url+"</h5>");
    res.write("<h5>method : get</h5>");
    res.write("<h5>The entered number is "+n+"</h5>");
    res.end();
           
})


app.listen(PORT);
console.log(PORT);