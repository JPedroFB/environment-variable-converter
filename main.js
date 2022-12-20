const express = require("express");
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname,"src/public")))
app.use(express.static(path.join(__dirname)))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running in ${process.env.PORT || 3000}`);
});