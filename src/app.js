// Creating a Express Server and making it listen on a port

//Step1: Importing the express module
const express=require('express');
//step2: Creating an instance of express
const app=express();
//step3:Making it to listen on a port 3000
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
//step4: Creating a route and request handlers for the server
// /login is the route and the callback function will be executed when the route is accessed url: http://localhost:3000/login
app.use("/login",(req,res)=>{
    res.send("This is response from  login page");
});
//app.use can process any type of request (GET, POST, PUT, DELETE) and it will be executed for every request to the server
app.use("/",(req,res)=>{
    res.send("This is response from server");
});