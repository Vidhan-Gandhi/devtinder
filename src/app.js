const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

// Array of Multiple Request Handlers

//1. All request handlers are passed in an array there will be bo difference in the output of the code if we use array or not. The output will be same in both cases.
app.get('/login', [(req, res, next) => {
    console.log('First handler');
    next(); // Pass control to the next handler
}, (req, res) => {
    console.log('Second handler');
    res.send('Login successful');
}, (req, res) => {
    console.log('Third handler');
    // This handler will not be reached because the response has already been sent
}]);

//Some of all request handlers can be passed in an array and some can be passed separately. The output will be same in both cases.