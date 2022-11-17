const mongoose = require('mongoose');

const Book = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    autor: {
        type: String,
        required: true
    },
    addOnList: {
        type: Date,
        required: true
    },
    completionDate: {
        type: Date,
        default: null
    },
    note: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'Quero Ler'
    }
});

module.exports = mongoose.model('Book', Book);
