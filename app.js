const express = require("express");

// ! Express.js Router is a valid Middleware Function!
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// * Parses Bodies sent through a FORM
// ^ and it automatically calls `next()`
app.use(express.urlencoded());

app.use(adminRoutes);

app.use(shopRoutes);

// * Handle favicon.ico requests to prevent browsers from triggering middleware twice
app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

app.listen(3000);
