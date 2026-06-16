const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

//Admin Authebtication
//Admin will have a token to access the admin route if the token is correct then admin can access the route otherwise it will return unauthorized 401 error
app.get('/admin',(req,res)=>{
    const tokens="wxyz"; //This token will be used to authenticate the admin
    const AuthenticateAdmin=tokens==="xyz"; //This will check if the token is correct or not this is function to authenticate the admin
    if(AuthenticateAdmin){
        res.send("Data send");
    }else{
        res.status(401).send("Unauthorized"); //This will return unauthorized error if the token is incorrect if i only write res.send("Unauthorized") then it will return 200 ok status code but we want to return 401 unauthorized error so we use res.status(401).send("Unauthorized")
        // If 200 status code is returned then it will be considered as a successful request but in this case we want to return 401 unauthorized error so we use res.status(401).send("Unauthorized") to return 401 status code and message "Unauthorized"
    }
   ;
});