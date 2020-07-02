var express = require('express')
var cors = require('cors')
var app = express()

var createEventRouter = require('./api/routes/createEventRouter')
var requestsRouter = require('./api/routes/requestsRouter')

app.use(express.json());
app.use(cors())

// var corsOptions = {
    
//     //origin: 'http://localhost:3000'
//     origin: 'https://csci5709webgroup20.herokuapp.com'
// }
  //cors(corsOptions),
app.use("/createevent", createEventRouter)
app.use("/requestsreceived",requestsRouter)


app.listen(process.env.PORT || 8080);
