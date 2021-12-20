const express = require("express")
const app = express()
const data = require("./Books.json")

app.get("/api/books", (req, res) => {
  res.send(data)
})

app.get("/api/books/:id", (req, res) => {
  let result = data.find((book) => book.bookID === parseInt(req.params.id))
  res.send(result)
})

app.listen(8000, () => console.log("Listening at port 8080"))
