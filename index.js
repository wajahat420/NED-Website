const express = require("express");
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const path = require('path');
const router = express.Router()
// const index = require("./Routes/index")

// const mongoURI = "mongodb://localhost/E-dealers"

// app.use(methodOverride('_method'));
// app.use(bodyParser.urlencoded({extended : false}))
// app.use(bodyParser.json())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
// app.use("/",index)
app.use('/', router);
const port = 5000

app.listen(port, () => console.log(`server running on port ${port}`))

//  process.env.PORT ||