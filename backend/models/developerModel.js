// backend/models/developerModel.js

const mongoose = require('mongoose')

const developerSchema = new mongoose.Schema({
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