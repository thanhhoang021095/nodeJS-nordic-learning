const express = require("express");
const port = 3001;

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get("/user/:id", (req, res) => {
    res.json({data: {}})
})

app.get("/", (req,res) => {
    console.log("hello home page")
    res.json({ message: "home page"})
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.json({message: `this is ${req.body}`})
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})