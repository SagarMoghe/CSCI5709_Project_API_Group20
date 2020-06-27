var express = require('express')
var cors = require('cors')
var app = express()

var createEventRouter = require('./api/routes/createEventRouter')

app.use(express.json());

var corsOptions = {
    
    origin: 'http://localhost:3000'
}
  
app.use("/createevent",cors(corsOptions),createEventRouter)


app.listen(process.env.PORT || 8080);
