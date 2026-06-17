const express=require('express');
const app=express();
const {adminauth}=require('./middlewares/AdminAuthentication'); //Importing the adminauth function from the AdminAuthentication.js file to use it as middleware in our routes.
const {userauth}=require('./middlewares/UserAuthentication');
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//If multiple routes are authenticated, we can use middleware to authenticate them all at once.

app.use('/admin',adminauth); //This line of code is using the adminauth middleware for all routes that start with /admin. This means that any request to a route that starts with /admin will first go through the adminauth middleware function to check if the user is an admin before allowing access to the route handler. If the user is not an admin, they will receive a 401 Unauthorized response. If the user is an admin, they will be able to access the route handler and receive the appropriate response.
app.get('/admin/data',(req,res)=>{   //This line of code is defining a route handler for the GET request to the /admin/data route. If the user is an admin, they will receive a response with the message "Welcome to the admin panel". If the user is not an admin, they will receive a 401 Unauthorized response from the adminauth middleware function.
    res.send("Welcome to the admin panel");
   
});
app.get('/admin/settings',(req,res)=>{ //This line of code is defining a route handler for the GET request to the /admin/settings route. If the user is an admin, they will receive a response with the message "Welcome to the admin settings". If the user is not an admin, they will receive a 401 Unauthorized response from the adminauth middleware function.
    res.send("Welcome to the admin settings");  
});
app.use('/user',userauth); //This line of code is using the userauth middleware for all routes that start with /user. This means that any request to a route that starts with /user will first go through the userauth middleware function to check if the user is authenticated before allowing access to the route handler. If the user is not authenticated, they will receive a 401 Unauthorized response. If the user is authenticated, they will be able to access the route handler and receive the appropriate response.
app.get('/user/data',(req,res)=>{ //This line of code is defining a route handler for the GET request to the /user/data route. If the user is authenticated, they will receive a response with the message "Welcome to the user panel". If the user is not authenticated, they will receive a 401 Unauthorized response from the userauth middleware function.
    res.send("Welcome to the user panel");  
});
app.get('/user/settings',(req,res)=>{ //This line of code is defining a route handler for the GET request to the /user/settings route. If the user is authenticated, they will receive a response with the message "Welcome to the user settings". If the user is not authenticated, they will receive a 401 Unauthorized response from the userauth middleware function.
    res.send("Welcome to the user settings");
});