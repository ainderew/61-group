const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const filepath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "HomePage")
      .replace(/__DESCRIPTION__/g, "Homepage Description");
      
      res.send(data)
  });
});


app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () =>{
    console.log("connected to " + PORT)
})