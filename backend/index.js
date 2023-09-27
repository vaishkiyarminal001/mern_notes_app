const express = require("express");
const { connection } = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');

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
        const token = jwt.sign({ userid: user._id }, 'minal');
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

app.get("/", async(req, res) =>{
    
    const readNotes = await NotesDetail.find();
    res.send(readNotes);
})


app.listen(8080, async() =>{

    try{
        await connection
        console.log("Connected to db");
    }catch{
        console.log("Something went wrong");
    }
    console.log("Connection Established");
   
})