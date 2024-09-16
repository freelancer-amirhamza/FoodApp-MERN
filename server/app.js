const express = require("express");
const app= express();
const cors = require("cors");



app.get("/", (req, res)=>{
    res.send("<center>Welcome to server page</center>")
});

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req, res, next)=>{
    res.status(404).json({
        message:"This Route is not found",
    })
})

module.exports = app;

