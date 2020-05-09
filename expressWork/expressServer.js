// import express
const express = require("express");

// create object of express
// all module will call with help of object
const app = express();

// import bodyPraser
const bodyPraser = require("body-parser");

//body parser for page
app.use(bodyPraser.urlencoded({
    extended: true
}));



// create server  but not serving anything on server to view
// callback function will serve content on server
// server always listen for user req
// when user enter url then server call app.get to serve html
app.listen(3000, (req, res) => {
    console.log("server is running on port: 3000");
});

// app.get function will get html pages from specified location 
// and serve on server 
// 1st args is loaction of get request
// 2nd args is callback funtion which takes request and response
// when user request for '/' 
// which is default loaction of server homePage
app.get('/', (req, res) => {
    res.send("Welcome to my Page :) ");
});

// about 
app.get('/about', (req, res) => {
    res.send("Welcome to my About Page :)  I am Prabhat  I am a full stack developer. ");
});

// contact
app.get('/contact', (req, res) => {
    res.send("IF you have query Contact me on this email = Prabhatvisvakrma9@gmail.com.");
});

// send html file with sendFile 
app.get('/calculator', (req, res) => {
    // always user absolute path with dirname
    res.sendFile(__dirname + '/index.html');
    // console.log(__dirname);
});

// it will post data after taking value from calculator page
app.post('/calculator', (req, res) => {
    // res.send('thankyou for post');
    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;
    res.send(`Sum is : ${sum}`);

});


// app.get serve html file or text from specified location
app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + '/bmi.html');
});

// post data after receiving from user
app.post('/bmi', (req, res) => {
    let num1 = Number(req.body.w);
    let num2 = Number(req.body.h);
    let bmi = num1 / (num2 * num2);
    res.send(`Your BMI is : ${bmi}`);
});