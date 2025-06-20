// backend/models/developerModel.js

const mongoose = require('mongoose')

const developerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})

const developerModel = mongoose.model('Developer', developerSchema)
module.exports = developerModel;