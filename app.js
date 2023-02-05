const express = require("express");
var hbs = require("hbs");
const path = require("path");
require("dontenv").config();

const app = express();
const port = process.env.PORT;

//TODO require hbs

//HandbleBars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Fernando Herrera",
    titulo: " Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Fernando Herrera",
    titulo: " Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Fernando Herrera",
    titulo: " Curso de Node",
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/generic", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/generic.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/404.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
