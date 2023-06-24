
const express = require("express");
const upload = require("./middlewares/upload");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/upload.html");
});

app.post("/upload", upload.single("file"), (req, res) => {
  const path = req.file.path;
  console.log(path);
  res.json({ file: req.file, message: "File uploaded successfully." });
});
