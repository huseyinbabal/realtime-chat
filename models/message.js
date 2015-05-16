var mongoose = require('mongoose')

var Message = new mongoose.Schema({
    author: String,
    message: String,
    createDate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Message', Message)