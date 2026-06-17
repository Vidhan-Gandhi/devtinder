function userauth(req, res, next) {
    const tokens="abc";
    const isUser=tokens==="abc";
    if (!isUser) {
        return res.status(401).send("Unauthorized");
    }
    else{
        next(); // Calling the next middleware function that matches the route if the user is authenticated. This allows the request to proceed to the next middleware or route handler in the stack.
    }
}

module.exports={userauth};  // Exporting the userauth function to be used in other files, such as app.js