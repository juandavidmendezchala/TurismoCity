const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("Got it!")
});

app.listen(3001, () => {
    console.log("Listen on port 3001")
});