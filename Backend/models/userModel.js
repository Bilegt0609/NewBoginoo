const mongoose = require("mongoose")

const {Schema, model } = mongoose

const UrlSchema = new Schema({
    email: {
        type: String
    },
    password : {
        type: String
    }
})

const UrlModel = model("urls", UrlSchema)

module.exports = UrlModel