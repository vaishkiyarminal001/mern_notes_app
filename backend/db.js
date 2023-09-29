const mongoose = require("mongoose");
require("dotenv").config();

const SingSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    phone : String,
    age : String
});

const NotesSchema = mongoose.Schema({
    notes: String,
    category: String
}, {
    timestamps: true 
});

const SingDetails = mongoose.model("sign", SingSchema);
const NotesDetail = mongoose.model("note", NotesSchema);

const connection = mongoose.connect(process.env.mongo_url);

module.exports = {
    connection,
    SingDetails,
    NotesDetail
}
