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
app.use("/createevent", createEventRouter)
app.use("/findevents",findEventRouter)
app.use("/requestsreceived",requestsRouter)
app.use("/usermng",userMngRouter)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening on port....' + port));
