const mongoose = require("mongoose")

const {Schema, model } = mongoose

const UrlSchema = new Schema({
    original: {
        type: String
    },
    short : {
        type: String
    }
})

const UrlModel = model("urls", UrlSchema)

module.exports = UrlModel