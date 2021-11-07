console.log("hello");
const express = require("express"),
app = express(),
PORT = 8080;

app.get("*",(req,res)=>{
    res.send("hello there")
})
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})