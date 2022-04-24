// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
// app was used before declared if it this is placed before the const app.


app.get("/", function(req, res){

    res.render('index', {foo: 'FOO'});
    var day = "";

    var today = new Date();
    var currentDay = today.getDay();
    // this var just removes the need to use 'today.getDay()' in the if statement. It's preference really.
    
if (currentDay === 6) {
    day = "Saturday";
    // res.write("<h1>It's the Weekend!!!</h1>")
    // res.write("<p>Let's get some coding done</p>")
    // res.sendFile(__dirname + "/index.html")
    // 2 underscores when writing out __dirname.
    // Sunday = 0, Saturday = 6  
} else if (currentDay === 1) {
    day = "Monday";
    // res.send("<h1>It's a work day... sigh</h1>")
} else if (currentDay === 2) {
    day = "Tuesday";
} else if (currentDay === 3) {
    day = "Wednesday";
} else if (currentDay === 4) {
    day = "Thursday";
} else if (currentDay === 5) {
    day = "Friday";
} else {
    day = "Sunday";
}
// Sunday and Saturday were swapped to ensure that the if, else if, and else statements worked properly.

// A switch statement is recommended if there are more than 5 if/else statements. Example of what it would look like is as follows.

// switch (currentDay) {
//     case 0:
//         day = "Sunday"
//         break;
//     case 1:
//         day = "Monday"
//         break;
//     case 2:
//         day = "Tuesday"
//         break;
//     case 3:
//         day = "Wednesday"
//         break;
//     case 4:
//         day = "Thursday"
//         break;
//     case 5:
//         day = "Friday"
//         break;
//     case 6:
//         day = "Saturday"
//         break;
//     default:
//         console.log("Error: current day is equal to: " + currentDay);
//         // console log is present in case the variable present is not provided during the switch statement. Wouldn't happen based on the days of the week.
// }

res.render("list", {kindOfDay: day});
// This passes in the variable day into the list.ejs

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