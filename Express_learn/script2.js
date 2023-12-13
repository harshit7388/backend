// these line is dealing wtih the concept of dynamic rendering

const express = require('express')
const app = express()

app.set("view engine", "ejs") // setup view engine
app.use(express.static('./public')) // this line is for linking the static file

app.get('/', function (req, res) {
  res.render("index")
})

app.get('/aboutus', function(req, res){
    res.render("about", {name:"mandli"})
})

app.listen(3000)


