require("./connection");
const express = require("express");
var cors = require("cors");

const path=require("path");
const bodyparser = require("body-parser");
const app = express();
app.use(cors());


app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());


const controller = require("./routes/api");
app.use("/" , controller);
app.listen("3000", ()=> {console.log("server running"); });
