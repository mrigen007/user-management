const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task Required"],
        maxLength: [20, "Task length cannot exceed 20 characters"],
    },
    mobile: {
        type: Number,
        required: [true, "Mobile Required"],
        maxLength: [10, "Mobile number cannot exceed 10 digits"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password Required"],
        unique: true
    }
})

module.exports = mongoose.model("Register", RegisterSchema);