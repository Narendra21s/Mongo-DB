const mongoose = require("mongoose");

function dbConnection() {
  const db_url = process.env.MONGO_URI;
  mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", function () {
  console.log("DB connected");
});

module.exports = dbConnection;
