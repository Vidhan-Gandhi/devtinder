const mongoose=require('mongoose');
mongoose.connect();
const connectDB= async()=>{
    await mongoose.connect(
        "mongodb+srv://namastedev:vV0QOqSaDbM8FCWe@devtinder.sfstvbg.mongodb.net/?appName=DevTinder"


    );
};

connectDB().then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.error("Database connection failed",err);
});