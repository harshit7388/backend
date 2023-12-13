const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
  res.send('profile')
})


// dynamic routing

app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`)
})


app.get('/profile/:username/:contact', function(req, res){
    res.send(`hello this is  ${req.params.username} with contact ${req.params.contact}`);
})

app.listen(3000)
