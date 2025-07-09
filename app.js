const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); // ! This allows the request to continue to the next middleware in line
// });

// * Handle favicon.ico requests to prevent browsers from triggering middleware twice
app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

app.use("/", (req, res, next) => {
  console.log("This middleware always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In /add-product middleware!");

  // * Default Response Header: "text/html"
  res.send('<h1>The "ADD Product" Page</h1>');
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");

  // * Default Response Header: "text/html"
  res.send("<h1>Hello from Express.js!</h1>");
});

app.listen(3000);
