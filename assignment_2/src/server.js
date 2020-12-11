const express = require('express')
const app = express()
let taskRoute = require('./routes/task')
let groupRoute = require('./routes/groups')
let peopleRoute = require('./routes/people')
let path = require('path')
let bodyParser = require('body-parser')
let db = require("./database.js")
// Declare filesystem
let fs        = require('fs');

//The body-parser middleware module, added to the Express.js app, will try to parse the body content 
//       (URL encoded or JSON) of the post request and store it in req.body object.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
  
app.use(taskRoute)
app.use(groupRoute)
app.use(peopleRoute)

app.use(express.static('public'))
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.info(`Server has started on ${PORT}`)) // Back ticks so I can add a variable