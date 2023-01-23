const express = require("express")
const app = express()
const mongoose = require("mongoose")
const linkRouter = require("./router/UrlLinkRoute")
const userRouter = require("./router/UserLinkRoute")
const cors = require("cors")

app.use(express.json());
app.use(cors())
app.use('/url',linkRouter)
app.use('/auth',userRouter)

const URI = 'mongodb+srv://tester:test123@cluster0.kjp5agy.mongodb.net/?retryWrites=true&w=majority'

const connection = mongoose.connect
connection(URI)
mongoose.connection.once("open" ,() => {
    console.log("succes mongoDB")
})

app.listen(8888, () => {
    console.log("server liston port in 8888")
}) 