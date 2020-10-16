const express = require("express");
const app = express()
//const mongoose = require("mongoose");
//const bodyParser = require("body-parser")
//const path = require('path');
//const router = express.Router()
// const index = require("./Routes/index")

// const mongoURI = "mongodb://localhost/E-dealers"

// app.use(methodOverride('_method'));
// app.use(bodyParser.urlencoded({extended : false}))
// app.use(bodyParser.json())

//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));


app.get('/',function(req,res) {
  res.sendFile('/home/wajahat/Desktop/NED-Website/index.html');
});
// app.use("/",index)
//app.use('/', router);
const port = 5000

app.listen(port, () => console.log(`server running on port ${port}`))

//  process.env.PORT ||
