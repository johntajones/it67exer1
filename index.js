const { response } = require("express")
const express = require("express")
const app = express()
const data = require("./Books.json")

app.get("/api/books", (req, res) => {
  res.status(200).send(data)
})

app.get("/api/books/:id", (req, res) => {
  let result = data.find((book) => book.bookID === parseInt(req.params.id))
  if (!result) {
    res.status(400).send("Book does not exist")
    return
  }

  res.send({ request: "success", data: result })
})

app.listen(8000, () => console.log("Listening at port 8080"))
