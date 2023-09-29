const express = require("express");
const { connection } = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
require("dotenv").config();

const { SingDetails, NotesDetail } = require("./db");


const app = express();
app.use(express.json());
app.use(cors());



// signup rout

app.post("/signup", async(req, res) =>{
    const payload = req.body;
    console.log(payload);

    const newUser = new SingDetails(payload);
    await newUser.save();
    res.send({Msg : "Signup Successfully", newUser});
});


//login rout

app.post("/login", async(req, res) =>{
    const {email, password} = req.body;
    const user = await SingDetails.findOne({email, password});

    if(!user){
        res.send("Please Signup first");
    }else {
        const token = jwt.sign({ userid: user._id }, process.env.jwt_key);
        res.send({msg:"Login Successfully", token:token, username:user.username});
    }
})

// notes rout
app.post("/create", async(req, res) =>{
    const payload = req.body;
    console.log(payload);

    const newNotes = new NotesDetail(payload);
    await newNotes.save();
    res.send({Msg : "Created New Notes", newNotes});
})


// for read the notes

app.get("/notes", async(req, res) =>{
    
    const readNotes = await NotesDetail.find();
    res.send(readNotes);
});


// delete rout


    app.delete("/notes/:notesId", async (req, res) => {
        const notesId = req.params.notesId;
    
        try {
            const deletedNote = await NotesDetail.findByIdAndRemove(notesId);
    
            if (!deletedNote) {
                return res.status(404).json({ message: "Note not found" });
            }
    
            res.json({ message: "Note deleted successfully" });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    // edit method

    app.put("/notes/:notesId", async (req, res) => {
        const notesId = req.params.notesId;
        const updatedNoteData = req.body;
    
        try {
            const updatedNote = await NotesDetail.findByIdAndUpdate(notesId, updatedNoteData, { new: true });
    
            if (!updatedNote) {
                return res.status(404).json({ message: "Note not found" });
            }
    
            res.json({ message: "Note updated successfully", updatedNote });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    
app.listen(8080, async() =>{

    try{
        await connection
        console.log("Connected to db");
    }catch{
        console.log("Something went wrong");
    }
    console.log("Connection Established");
   
});