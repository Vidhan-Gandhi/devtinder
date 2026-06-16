const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//Step1: What happens when we did not write res.send in request handler?
app.get('/login',(req,res)=>{
    console.log("Login request received");
    //res.send("Login successful");
});
//An infinite loop will occur because the server will keep waiting for a response to be sent back to the client, but since res.send is not called, the request will never be completed. This can lead to a memory leak and eventually crash the server.

