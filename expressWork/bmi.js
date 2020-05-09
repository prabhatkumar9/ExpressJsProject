// import express
const express = require('express');

// object of express
const app = express();

// import body parser
const bdParser = require('body-parser');

// use body parser for page 
app.use(bdParser.urlencoded({
    extended: true
}));

// create server
// listner for port 
app.listen(3000, (req, res) => {
    console.log('server is ruuning on localhost port: 3000');
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