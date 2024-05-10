const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const bookRouter = require('./routes/book.router')

app.use("/", bookRouter)

app.get("/", (req, res) => {
    res.sendFile("/login.html", {root: __dirname});
})

app.get("/registrasi.html", (req, res) => {
    res.sendFile("/registrasi.html", {root: __dirname});
})

app.listen(process.env.PORT, () => console.log("Server is running on port 3000"))
