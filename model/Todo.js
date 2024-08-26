const mongoose = require("mongoose")

const todoSchma = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchma)
