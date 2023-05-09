const express = require("express");
const path = require("path")

const app = express()

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/dashboard.html');
})

app.listen(8090,()=>{
    console.log("connetcted to server")
})