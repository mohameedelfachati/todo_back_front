var express = require("express");
var app = express();
app.listen(3000, () => {});

app.get("/test", (req, res, next) => {
  console.log("/test requested");
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
