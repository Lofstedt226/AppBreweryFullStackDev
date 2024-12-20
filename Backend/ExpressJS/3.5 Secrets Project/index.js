//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var psWord = "ILoveProgramming";

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

// app.

app.post('/check', (req, res) => {
    console.log(req.body);
    console.log(psWord);

    if (req.body["password"] == psWord){
        console.log(200);
        res.sendFile(__dirname + "/public/secret.html")
    } else{
        console.log(202);
        res.sendFile(__dirname + "/public/index.html")
    }

});

app.listen(port,() => {
    console.log(`Port ${port} is running.`);
});