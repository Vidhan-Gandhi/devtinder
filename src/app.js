const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//Step 1: Creating Multiple Requests Hadlers
//If we not use next() method in first request handler then second request handler will not execute and we will get error "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client" because we are trying to send response twice but we can only send response once for a request. So we need to use next() method to pass control to next request handler.
//If both request handlers are sending response then the request handlers will execute in sequence and we will get response from  request handlers that eexecuted first but if we not use next() method in first request handler then second request handler will not execute and we will get error "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client" because we are trying to send response twice but we can only send response once for a request. So we need to use next() method to pass control to next request handler.
// So next() method is must when we have multiple request handlers for a route and we want to send response from both request handlers. If we not use next() method in first request handler then second request handler will not execute and we will get error "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client" because we are trying to send response twice but we can only send response once for a request. So we need to use next() method to pass control to next request handler.
app.get('/login',
    (req,res,next)=>{
    res.send("This is response from first request handler");
    console.log("Response 1");
    next();
},
(req,res)=>{
    console.log("Response 2");
    res.send("This is response from second request handler");
    
});