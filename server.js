const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/news", require("./api/news"));
app.use("/signup", require("./api/user"));
app.use("/login", require("./api/login"));
app.use("/api/login", require("./api/login"));
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
