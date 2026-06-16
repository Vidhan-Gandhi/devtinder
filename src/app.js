const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

// Another method for creating multiple request handlers for the same route
app.get('/hello',(req,res,next)=>{
    console.log("Hello World!");
    next();
});
app.get('/hello',(req,res)=>{
    res.send("Hello Again!");
});
//This is same as like we created two handlers for the same route. We can also use array of handlers for the same route.