const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(req , res){
    console.log("servier is working on port 3000")
});


app.get("/", function(req, res){
    console.log(res.statusCode);

    res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res){
    const gif = req.body.gif;
    const apiKey = "4aqxjkPDPf508cWrZK2PMPA8n5Hjvskh";
    const url = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + gif + "&limit=1&offset=0&rating=g&lang=en";

    axios.get(url).then(function(response){
        const gifData = response.data;
        console.log(gifData)
    }).catch(function(err){
        console.log(err)
    });
});



