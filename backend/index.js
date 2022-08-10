require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { routes } = require("./src/routes")
const app = express()
const PORT = process.env.PORT


app.use(cors({credentials: true, origin: `http://localhost:8080`}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/img", express.static("img"))
app.use(cookieParser('12345'))

routes.forEach(element => {
    app.use(`/api/${element}`, require(`./src/routes/${element}`))
});

mongoose.connect(process.env.DB_URI)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))