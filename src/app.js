const express=require('express');
const app=express();


//To fetch data from database
app.get("/signup",(req,res)=>{
    res.send({firstName:"John",lastName:"Doe",email:"vg" });    
})

//To post data on database
app.post("/signup",(req,res)=>{
    res.send("This is signup response");    
});

//To delete data from database
app.delete("/signup",(req,res)=>{
    res.send("This is delete response");    
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

// const express=require('express');
// const app=express();

// app.use("/signup",(req,res)=>{
//     res.send("This is signup response");    
// })

// app.use((req,res)=>{
//     res.send('Hello World');    
// })
// app.listen(7777, ()=>{
//     console.log('Server is running on port 7777');  
// })

// const express=require('express');
// const app=express();
// app.use("/signup",(req,res)=>{
//     res.send("This is signup response");    
// })
// app.use((req,res)=>{
//     res.send('Hello World');
// })

// app.listen(1405,()=>{
//     console.log('Server is running on port 1405');   
// })
