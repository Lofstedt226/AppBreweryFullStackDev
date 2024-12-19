import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";


// VERY IMPORTANT
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

function generateBandName(req, res, next) {
  // console.log(req.body);
  bandName = req.body["street"] + req.body["pet"] + "😃";
  // console.log(bandName);
  next();
}


app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(generateBandName);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  res.send(`<h1>${bandName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
