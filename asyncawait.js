//async await is a way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.
//when function is declared with the async keyword,it means now asynchronous operations can be performed inside that function using the await keyword. The await keyword is used to pause the execution of the function until a something is resolved or rejected. It can only be used inside an async function. When the await keyword is used, it waits for the promise to resolve and returns the resolved value. If the promise is rejected, it throws an error that can be caught using a try-catch block.

async function fetchData() {   // async function declaration
    const  data = await fetch('https://api.example.com/data');  //awaid suspends the execution of the function until the promise return the data from the API 
    console.log("Data fetched successfully:", data); 
}
fetchData(); // This will start the execution of the fetchData function, but it will not block the execution of the code below it.
console.log("Hello"); // This will be printed first because fetchData is asynchronous and will not block the execution of the code below it.

//Flow of execution:
//1. The fetchData function is called, and it starts executing.
//2. The await keyword is encountered, and the execution of the function is paused until the promise returned by fetch resolves or rejects.
//3. Meanwhile, the console.log("Hello") statement is executed, and "Hello" is printed to the console.
//4. Once the promise resolves, the execution of the fetchData function resumes, and the data is logged to the console.