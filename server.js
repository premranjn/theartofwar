const express = require("express");
const app = express();
const path = require("path"); // Include the path module

// Specify the directory where static files (CSS, JS) are located
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is Up and Running on port: 3000");
});
