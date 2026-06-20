const mongoose = require('mongoose'); // Importing the mongoose library
// This function will handle the connection to the MongoDB database using async/await syntax.
const connectDB = async () => {
    try {
        // 1. TRY to do the slow/risky thing
        await mongoose.connect(
            "mongodb+srv://namastedev:vV0QOqSaDbM8FCWe@devtinder.sfstvbg.mongodb.net/?appName=DevTinder"
        );
        
        // 2. If the line above works, this line runs next!
        console.log("Database connected successfully");

    } catch (err) {
        // 3. If the connect() fails, the code INSTANTLY jumps down here.
        // It skips the success console.log entirely.
        console.error("Database connection failed", err);
    }
};

// Now you just call the function! No .then() or .catch() needed down here.
connectDB();