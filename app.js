var express = require('express')
//var cors = require('cors')
var app = express()

var createEventRouter = require('./api/routes/createEventRouter')

app.use(express.json());

// var corsOptions = {
    
//     origin: 'http://localhost:3000'
// }
  
app.use("/createevent",createEventRouter)


//app.use(cors())
var corsOptions = {
    
    origin: 'http://localhost:3000'
  }


app.listen(8080, function () {
  console.log('port 8080')
})