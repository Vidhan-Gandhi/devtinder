// Creating a Express Server and making it listen on a port

//Step1: Importing the express module
const express=require('express');
//step2: Creating an instance of express
const app=express();
//step3:Making it to listen on a port 3000
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});