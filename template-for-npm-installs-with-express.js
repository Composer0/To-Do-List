// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.send("Hello");
});
// res means response, inferring response from server.

app.listen(3000, function(){
    console.log("Server started on port 3000");
});