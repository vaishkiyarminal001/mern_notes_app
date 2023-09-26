const mongoose = require("mongoose");

const SingSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    phone : String,
    age : String
});

const NotesSchema = mongoose.Schema({
    notes : String,
    category : String
});


const SingDetails = mongoose.model("sign", SingSchema);
const NotesDetail = mongoose.model("note", NotesSchema);

const connection = mongoose.connect("mongodb://127.0.0.1:27017/noteapp");

module.exports = {
    connection,
    SingDetails,
    NotesDetail
}
