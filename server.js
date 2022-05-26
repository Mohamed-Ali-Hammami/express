const express = require("express");
//const isAuth = require("./middelware/isAuth");

const app = express();

//app.use(isAuth);

app.use(express.static("public"));

const PORT = 7000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/services.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});
app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/public/style.css");
});

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server running on ${PORT}`)
);
