
// Import express()
const express = require('express')
// Assign express to variable
const app = express()
// Provide port number to run app
const port = 4000

// Assign body-parser to variable
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Send back info from the root file
app.get('/', (req, res) => {
    res.send('Welcome to data representation and quering!')
})


// Pass parameter in request
app.get("/hello/:name", (req, res) => {
    // Sends back params from URL
    res.send("Hello " + req.params.name);
});

// Take params from form
app.get("/name",(req,res)=>{
    // Sends back info from form query
    res.send(`Your details are: ${req.query.fname} ${req.query.lname}` );
}
);

// POST params
app.post("/name",(req,res)=>{
    // Sends back info from form query
    res.send(`Your details sent are: ${req.bodyParser.fname2} ${req.bodyParser.lname2}` );
}
);

// Send back HTML page 
app.get("/test",(req,res) => {
    // Sends back requested file
    res.sendFile(__dirname + "/index.html");
}
);

// Send data back from JSON file provided in a function
app.get("/api/movies", (req, res) => {
    const movies = [
        {
            "movies": [
                {
                    "Title": "Avengers: Infinity War",
                    "Year": "2018",
                    "imdbID": "tt4154756",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
                },
                {
                    "Title": "Captain America: Civil War",
                    "Year": "2016",
                    "imdbID": "tt3498820",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
                }
            ]
        }
    ]
    res.status(200).json({
        mymovies: movies,
        message: "Data sent!!!",

    })
}

);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})