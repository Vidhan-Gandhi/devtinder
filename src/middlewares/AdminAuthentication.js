//Here we are checking if the user is an admin or not. If the user is not an admin, we will return a 401 Unauthorized response. If the user is an admin, we will call the next middleware function that matches the route. This is a common pattern in Express.js applications to protect certain routes from unauthorized access.
function adminauth(req, res, next) {
    console.log("Checking admin authentication...");

    const tokens="xyx";
    const isAdmin=tokens==="xyx";

    if (!isAdmin) {
        return res.status(401).send("Unauthorized");
    }
    else{
        next();
    }
}

module.exports = { adminauth }; // Exporting the adminauth function to be used in other files, such as app.js