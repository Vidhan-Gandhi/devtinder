// const express=require('express');
// const app=express();

// app.use("/test",(req,res)=>{
//     res.send("This is test respomse");
// });

// app.use("/login",(req,res)=>{
//     res.send("This is login response");     
// });

// app.use((req,res)=>{
//     res.send('Hello World');
// });


// app.listen(3000,()=>{
//     console.log('Server is running on port 3000');
// });

const express=require('express');
const app=express();

app.use("/signup",(req,res)=>{
    res.send("This is signup response");    
})

app.use((req,res)=>{
    res.send('Hello World');    
})
app.listen(7777, ()=>{
    console.log('Server is running on port 7777');  
})
