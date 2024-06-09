const express = require("express");
require("./connection/db");
const dotenv = require("dotenv");
const app = express();
const bookRoute = require("./routes/bookRoutes");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server Started Successfully");
});

app.use(cors());

app.use(express.json());
app.use("/api/book", bookRoute);

app.listen(port, () => {
  console.log(`Server Started Successfully on :${port}`);
});
