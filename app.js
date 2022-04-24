// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(reg, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    // this var just removes the need to use 'today.getDay()' in the if statement. It's preference really.
    
if (currentDay === 0 || currentDay === 6) {
    // res.write("<h1>It's the Weekend!!!</h1>")
    // res.write("<p>Let's get some coding done</p>")
    res.sendFile(__dirname + "/index.html")
    // 2 underscores when writing out __dirname.
    // Sunday = 0, Saturday = 6
} else {
    res.send("<h1>It's a work day... sigh</h1>")
}

});
// res means response, inferring response from server.
// res.send only allows one piece of data to be transmitted.
// res.write allows multiple pieces of date to be sent out.
// write vs send ... creating an email line by line vs sending a message.
// res.sendFile() sends over desired information to target location. In our case, the index.html

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
// in order to run the server. Run in terminal 'node app.js'. Not nodemon.