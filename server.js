"use strict";

const express = require("express");

const PORT = 8090;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
    res.send("The webapp works!");
});

app.listen(PORT, HOST);

console.log(`App running on http://${HOST}:${PORT}`)