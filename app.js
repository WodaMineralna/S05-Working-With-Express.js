const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // ! This allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware!");

  // * Default Response Header: "text/html"
  res.send("<h1>Hello from Express.js!</h1>");
});

console.log("Outside middleware");

app.listen(3000);
