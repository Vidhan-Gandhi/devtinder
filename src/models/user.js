// Flow for creating user table in database and adding user to the database using async await in Node.js with Express and Mongoose
//Create folder
//Define schema
//Create model
//Export model
//Import model in app.js
//Create a route to add user to the database
//Use async await to handle asynchronous operations
//Test the route using Postman
//if everything is correct, you should see the user added to the database and a response sent back to Postman.
//Now you can see the user added to the database using MongoDB Compass or any other MongoDB client.
const mongoose=require('mongoose');// Importing the mongoose library to interact with MongoDB

const UserSchema=new mongoose.Schema({      // Defining the schema for the User model schema is a blueprint for the structure of documents in a MongoDB collection. It defines the fields and their data types, as well as any validation rules or constraints that should be applied to the data.
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,    
    required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true   
    }
});

const User=mongoose.model('User',UserSchema); // Creating a table named 'User' based on the UserSchema. This model will be used to interact with the 'users' collection in the MongoDB database.
module.exports=User;

//Model means table in database. It is a blueprint of how the data will be stored in the database. It defines the structure of the data, the data types, and any validation rules that should be applied to the data. In this case, the User model defines the structure of the user data that will be stored in the MongoDB database.