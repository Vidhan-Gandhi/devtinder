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
// We can also create a route for the home page and it will be executed when the user accesses the home page url: http://localhost:3000/homepage
app.use("/homepage",(req,res)=>{
    res.send("This is response from home page");
});
//app.use can process any type of request (GET, POST, PUT, DELETE) and it will be executed for every request to the server
app.use("/",(req,res)=>{
    res.send("This is response from server");
});
//step5:Using HTTP methods to create routes for different types of requests
//GET request for the login page
//GET request is used to retrieve data from the server and it will be executed when the user accesses the login page url: http://localhost:3000/login with a GET request and the data will be sent in the query string of the URL           
app.get("/login",(req,res)=>{

    res.send("{name:'VGBTE',age:22}");
});
//POST request for the login page
//post request is used to send data to the server and it will be executed when the user submits a form or sends data to the server url: http://localhost:3000/login with a POST request and the data will be sent in the body of the request    
app.post("/login",(req,res)=>{
    res.send("This is response from POST request to login page");
}); 
//PUT request for the login page
//PUT request is used to update data on the server and it will be executed when the user sends a PUT request to the login page url: http://localhost:3000/login with a PUT request and the data will be sent in the body of the request     
app.put("/login",(req,res)=>{
    res.send("This is response from PUT request to login page");
}); 
//DELETE request for the login page
//DELETE request is used to delete data from the server and it will be executed when the user sends a DELETE request to the login page url: http://localhost:3000/login with a DELETE request and the data will be sent in the body of the request       
app.delete("/login",(req,res)=>{
    res.send("This is response from DELETE request to login page");
}); 
app.delete("/login",(req,res)=>{
    res.send("This is response from DELETE request to login page");
}); 
//PATCH request for the login page
//PATCH request is used to update a part of the data on the server and it will be executed when the user sends a PATCH request to the login page url: http://localhost:3000/login with a PATCH request and the data will be sent in the body of the request
app.patch("/login",(req,res)=>{
    res.send("This is response from PATCH request to login page");
});

//step6:Hirearchy of routes matters in express and the order of routes is important in express because it will execute the first route that matches the request and it will not execute the next route even if it matches the request url: http://localhost:3000/login with a GET request will execute the first route and it will not execute the second route even if it matches the request
// app.use("/",(req,res)=>{
 //   res.send("This is response from server");
//});  This should be your last route because it will match every request and it will not execute the next route even if it matches the request


//step7:"Data will be sent in the query string" like said in step5 grt method, we can access the data sent in the query string using req.query object and it will be executed when the user accesses the login page url: http://localhost:3000/login?name=VGBTE&age=22 with a GET request and the data will be sent in the query string of the URL
app.get("/login",(req,res)=>{
    console.log(req.query);
});
//A query string is the part after ? in the URL.
//http://localhost:3000/login?email=vidhan@gmail.com&password=123
///login
//   ?
//email=vidhan@gmail.com
//&
//password=123

//Step8:Dynamic Routing
app.get("/login/:name/:age",(req,res)=>{
    console.log(req.params);//req.params is used to access the data sent in the URL and it will be executed when the user accesses the login page url: http://localhost:3000/login/VGBTE/22 with a GET request and the data will be sent in the URL 
    res.send("This is response from dynamic routing");
}  ); 
//Exapmple url: http://localhost:3000/login/VGBTE/22
//output: { name: 'VGBTE', age: '22' } in the console and "This is response from dynamic routing" in the browser