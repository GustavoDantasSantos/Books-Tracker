require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.URL_DATABASE;

module.exports = db;
