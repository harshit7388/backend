// var a = 10;
// // console.log("hello")
// module.exports = a;// this will export the value of a 

// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());



// var figlet = require("figlet");

// figlet("harshit", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });


// this below code has created a server , on port 3000 and after / we define the route
const express = require('express')
const app = express()

// this is middleware
app.use(function(req, res, next){
console.log('this is middleware-1')
next();
})

app.use(function(req, res, next){
console.log('this is middleware-2')
next();
})

app.get('/', function(req, res){
    res.send('harshit')
})
app.use(function(req, res, next){
    console.log('this is middleware-3')
    next();
    })

app.get('/contact', function(req, res){
    res.send('contact me at : 7388670069')
})

app.get('/contact/email', function(req, res){
    res.send('email : xyz@gmail.com')
})

app.listen(3000)

