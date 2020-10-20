const express = require("express");
const app = express()
const bodyParser = require("body-parser")
// const mongoose = require("mongoose");

const Msg = require("./public/model")
const mongoose = require('mongoose')

const url = "mongodb+srv://wajahat:node123@first.uba9r.mongodb.net/sample?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
const connect = async()=>{
  await mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })
}
connect()

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/post",(req,res)=>{
    let msg = new Msg({
      message : req.body.msg
    })
    // console.log("req",req.body.msg)
    msg.save()
      .then(user => console.log("successfully send",user))
      .catch(err => console.log("err", err))  
})
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/public'));


app.get('/get', async (req, res) => {
  Msg.find({})
  .then(get=>{
    res.send(get)
  })
  .catch(err=>{
    console.log("err",err)
  })
}); 

app.get('/baba',function(req,response) {
  let newUser = new Msg({
    message:"This is a message"
    // signupAs : req.body.signupAs,   
  })
  newUser.save()
    .then(user => console.log("successfully Send"))
    .catch(err => console.log(err))                
  });

const port = 5000

app.listen(port, () => console.log(`server running on port ${port}`))
//  process.env.PORT ||
