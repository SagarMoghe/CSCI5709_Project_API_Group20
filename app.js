var express = require('express')
var cors = require('cors')
var app = express()

var createEventRouter = require('./api/routes/createEventRouter')
var requestsRouter = require('./api/routes/requestsRouter')
var findEventRouter = require('./api/routes/findEventRouter')
var userMngRouter = require('./api/routes/UserMngRouter')

app.use(express.json());
app.use(cors())

// var corsOptions = {

//     //origin: 'http://localhost:3000'
//     origin: 'https://csci5709webgroup20.herokuapp.com'
// }
//cors(corsOptions),

//All requests related to CreateEvent screen goes here
app.use("/createevent", createEventRouter)

//All requests related to FindEvent screen goes here
app.use("/findevents", findEventRouter)

// app.use("/bookingdetails", requestsRouter)

app.use("/requestsreceived", requestsRouter)
app.use("/usermng", userMngRouter)
app.use("/verifyid", userMngRouter)
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on port....' + port));