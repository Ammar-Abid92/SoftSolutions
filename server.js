const express = require("express");
const { dirname } = require("path");


const app = express();

app.use(express.static("public"));

app.get("/", function (req , res){
    res.sendFile(__dirname + "/views/index.html");  
  });


  const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Server started on port 3000");
  });
