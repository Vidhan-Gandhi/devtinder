// Best Practise is that server should start listening only after the database connection is established. This ensures that the application is fully ready to handle requests and interact with the database without running into issues related to unestablished connections.

const mongoose=require('mongoose');
const connectDB=async ()=>{
        await mongoose.connect("mongodb+srv://namastedev:vV0QOqSaDbM8FCWe@devtinder.sfstvbg.mongodb.net/?appName=DevTinder");
};
module.exports=connectDB;