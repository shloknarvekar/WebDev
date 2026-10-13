const express = require("express");
const app = express()
console.dir(app)

// app.use((req, res) => {
//     console.log("We got a new request");
//     res.send("Hello, we got your request! This is your Response");
// })
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit}!`);
})
app.get('/cats', (req, res) => {
    console.log("meow!");
})
app.get('/dogs', (req, res) => {
    res.send("woof!");
})
app.get('/{*path}', (req, res, next) => {
    res.send("IDK that route");

})
app.listen(3000, () => {
    console.log("Listening on port 3000!");
})