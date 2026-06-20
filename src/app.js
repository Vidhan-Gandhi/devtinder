const express = require('express');
const app = express();
const connectDB = require('./config/database'); 
const User = require('./models/user'); 

// Ensure Express can read JSON data (crucial for later!)
app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        // 1. Keys MUST match the schema exactly (camelCase)
        const userobj = { // Sample data to be added to the database, this should ideally come from req.body in a real application
            FirstName: "Vidhan",
            LastName: "Bhat",
            Email: "vg@example.com", // Made this a real email format
            Password: "123",
        };  
        
        const user = new User(userobj);  //Adding a row to the User table in the database using the User model. This creates a new instance of the User model with the provided user data (userobj). The user object now represents a new document that can be saved to the MongoDB database.
        
        // 2. AWAIT the save operation!
        await user.save();  // This will save the new user document to the MongoDB database. The save() method is asynchronous and returns a promise, so we use await to wait for the operation to complete before moving on to the next line of code.
        
        // 3. SEND A RESPONSE back so Postman doesn't load forever
        res.send("User added successfully to the database!");
        
    } catch (err) {
        // 4. Catch any validation errors (like a missing name)
        res.status(400).send("Error saving user: " + err.message);
    }
});

const startServer = async () => {
    try {
        // DON'T FORGET THE AWAIT HERE!
        await connectDB();
        console.log("Database connected successfully");
        
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
};

startServer();