const express=require('express');
const app=express();
const connectDB =require('./config/database'); // Importing the connectDB function from the database configuration file

const startServer=async ()=>{
    try{
        connectDB();
        console.log("Database connected successfully");
        app.listen(3000,()=>{
            console.log("Server is running on port 3000");
        });
    }
    catch(err){
        console.error("Error connecting to the database:", err);
       
    }
};
startServer(); // Calling the startServer function to initiate the database connection and start the server