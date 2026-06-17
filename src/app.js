const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});



app.get('/admin',(req,res,next)=>{
    console.log("Hello");
    next(); // Simulating an error to demonstrate error handling
    
    
});

app.get('/admin',(req,res,next)=>{
    throw new Error("Something went wrong!"); // Simulating an error to demonstrate error handling
});

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send("Internal Server Error");
    }
});

