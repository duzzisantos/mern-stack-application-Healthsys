const dbConfig = require("../config/config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.doctors = require("./doctors")(mongoose);
db.patients = require("./patients")(mongoose);
db.medrecords = require("./medrecords")(mongoose);
db.signup = require("./signup")(mongoose);
db.login = require("./login")(mongoose);

module.exports = db;
