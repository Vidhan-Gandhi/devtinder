const express=require('express');
const app=express();
require('./config/database'); // Importing the database configuration to establish a connection to MongoDB
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

