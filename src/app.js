const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//ERROR HANDLING

// app.get('/admin',(req,res,next)=>{
//     console.log("Hello");
//     next(); // Simulating an error to demonstrate error handling
    
    
// });

// app.get('/admin',(req,res,next)=>{
//     throw new Error("Something went wrong!"); // Simulating an error to demonstrate error handling
//     // If error it skips the next middleware and goes to the error handling middleware
// });

// app.use('/',(err,req,res,next)=>{ // if we write this before error occurs, it will not work because error handling middleware should be defined after the route that may throw an error. This is because Express.js processes middleware in the order they are defined, so if the error handling middleware is defined before the route that may throw an error, it will not be able to catch the error.
//     if(err){
//         res.status(500).send("Internal Server Error");
//     }
// });

app.get('/admin',(req,res,next)=>{
    console.log("First Route"); 
    next(); 
    
});
app.get('/admin',(req,res,next)=>{
    console.log("Second Route");
    throw new Error("Something went wrong!");
    next();
});
app.get('/admin',(req,res,next)=>{
    console.log("Third Route");
    res.send("hi");
});
app.use('/',(err,req,res,next)=>{
    res.status(500).send("Internal Server Error");
});

