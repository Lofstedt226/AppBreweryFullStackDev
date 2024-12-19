import express, { request } from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Port ${port} has been created.`)
});

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("Hello World!")
});

app.get("/About", (req,res) => {
    res.send("About Page!");
});

app.get("/Contact", (req,res) => {
    res.send("Contact Page!");
});