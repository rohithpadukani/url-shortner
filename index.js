import express from "express";
import bodyParser from "body-parser";
import shortUrl from "node-url-shortener";
import isUrl from 'is-url';


const app = express()
const port = 3000

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render("main.ejs");
})

app.post("/submit", (req, res) => {
    const urlValue = req.body["url"];
    console.log(urlValue);
    shortUrl.short(urlValue, function (err, url) {
        res.render("main.ejs", {shorten: url})
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})