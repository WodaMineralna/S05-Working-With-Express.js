const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In /add-product middleware!");

  // * Default Response Header: "text/html"
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
  );
});

// ! Order of middlewares is important! They must come before the "/" one (that has res.send(<h1>...</h1>))
router.post("/product", (req, res, next) => {
  // ^ by default, `req` doesn't try to Parse the incoming Request Body
  // to do that, we need to register a Parser (we put it before our Route-Handling middlewares)
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
