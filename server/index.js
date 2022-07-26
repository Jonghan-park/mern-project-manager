const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const path = require("path");

const app = express();

// Connect to database
connectDB();

app.use(cors());

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });

  // app.use(express.static("../client/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  // });
  //
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "production",
  })
);

console.log(__dirname);

app.listen(port, console.log(`Server running on port ${port}`));
