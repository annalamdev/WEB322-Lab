const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Lok Man Lam - WEB322 " + new Date().toISOString());
});

app.listen(3000, () => console.log("Server running on port 3000"));
