const express = require("express");
const cors = require("cors");
const { connect } = require("./db");
const port = process.env.PORT || 5000;
const productsHandler = require("./routeHandler/productsHandler");
const categoriesHandler = require("./routeHandler/categoriesHandler");
const usersHandler = require("./routeHandler/usersHandler");

// Middleware
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
connect();

// API routes
app.use("/products", productsHandler);
app.use("/categories", categoriesHandler);
app.use("/user", usersHandler);



app.get("/", async (req, res) => {
  res.send("The Faucets Server is Running");
});

app.listen(port, () => {
  console.log(`The Faucets Server is Running on ${port}`);
});
