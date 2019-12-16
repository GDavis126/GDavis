var express = require("express")

//Create an instance of epress server
var app = express()

var courseData = require("./Fial_JSON.json")

//Define a route
app.get('/', function(req, res){
  res.send("Final.html", {root: path.join('/')});
});


app.get('/myroute', function(req,res){
  res.json(courseData)
})

app.get('/search', function(req,res){
  res.render("search")
})

app.listen(3000, function(){
  console.log("Running on port 3000...")
})
