const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log('In "/" middleware!');

  // * Default Response Header: "text/html"
  res.send(
    '<h1>Hello from Express.js!</h1><form action="/add-product" method="GET"><button type="submit">Go to Add-Product Page</button></form>'
  );
});

module.exports = router;
