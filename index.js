import express from "express"
const app = express()

app.use("/", express.static("./"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.listen(5000, () => {
  console.log("Started listenin port 5000")
})
