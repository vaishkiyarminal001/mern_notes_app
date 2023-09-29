const mongoose = require("mongoose");

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

const connection = mongoose.connect("mongodb+srv://vaishkiyarminal001:9304059268@cluster0.nalowzi.mongodb.net/notesapp?retryWrites=true&w=majority");

module.exports = {
    connection,
    SingDetails,
    NotesDetail
}
