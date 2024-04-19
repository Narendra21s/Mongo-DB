const express = require("express");

const dotenv = require("dotenv");

const dbConnection = require("./databaseConnection");

const userRootes = require("./Routes/user");
const bookRoutes = require("./Routes/book");

dotenv.config();

const app = express();

dbConnection();

const port = 8001;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Server is running :-)",
  });
});

app.use("/users", userRootes);
app.use("/books", bookRoutes);

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    msg: "The path doesn match",
  });
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
