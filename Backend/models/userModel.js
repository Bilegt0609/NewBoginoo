const mongoose = require("mongoose")

const {Schema, model } = mongoose

const UserSchema = new Schema({
    email: {
        type: String
    },
    password : {
        type: String
    }
})

const UserModel = model("users", UserSchema)

module.exports = UserModel