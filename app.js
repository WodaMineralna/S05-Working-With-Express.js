const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); // ! This allows the request to continue to the next middleware in line
// });

// * Parses Bodies sent through a FORM
// ^ and it automatically calls `next()`
app.use(express.urlencoded())

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
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
  );
});

// ! Order of middlewares is important! They must come before the "/" one (that has res.send(<h1>...</h1>))
app.use("/product", (req, res, next) => {
  // ^ by default, `req` doesn't try to Parse the incoming Request Body
  // to do that, we need to register a Parser (we put it before our Route-Handling middlewares)
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log('In "/" middleware!');

  // * Default Response Header: "text/html"
  res.send("<h1>Hello from Express.js!</h1>");
});

app.listen(3000);
