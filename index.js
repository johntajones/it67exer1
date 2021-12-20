const express = require("express")
const app = express()

app.get("/api/books", (req, res) => {
  res.send("Requesting books")
})

app.get("/api/books/:id", (req, res) => {
  res.send("Requesting specific books")
})

app.listen(8000, () => console.log("Listening at port 8080"))
