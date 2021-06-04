const express= require("express");
const app = express();

app.get("/", function(req, res){
  res.send("hello");
});

app.get("/contact", function(req, res){
  res.send("Contact me at anupriya.gautam@abc.com");
});

app.get("/about", function(req, res){
  res.send("I am cute!");
});

app.listen(3000, function(){
  console.log("Started sever");
});
