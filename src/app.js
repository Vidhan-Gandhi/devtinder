const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//Middlewares

//First 2 request handlers are middlewares and the last one is the final request handler
//Middlewares are functions that do not send a response to the client, but they can modify the request and response objects, and they can also call the next middleware in the stack.
app.get('/login',(req,res,next)=>{
    console.log("Login Page");
    next();
},(req,res,next)=>{
    console.log("Login Page Accessed");
    next();
},(req,res)=>{
    res.send("Login Page");
});