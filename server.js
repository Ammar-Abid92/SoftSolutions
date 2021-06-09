const express = require("express");
const { dirname } = require("path");
const mongoose= require("mongoose");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const DB ='mongodb+srv://Mraza143:qwerty123$@cluster0.zwhe1.mongodb.net/SS_data?retryWrites=true&w=majority';

mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:true
}).then(()=>{
  console.log("Coneected to the database");
}).catch((err)=>console.log(err));


const messageSchema = {
  name: String,
  email: String,
  message: String
};

const Message = mongoose.model("Message", messageSchema);

app.get("/", function (req , res){
    res.sendFile(__dirname + "/views/index.html");  
  });

app.post("/", function(req, res){
    const message = new Message({
      name: req.body.namefield,
      email: req.body.emailfield,
      message : req.body.messagefield
});
    message.save(function(err){
      if (!err){
          res.redirect("/");
      }
    });
  });
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Server started on port 3000");
  });
