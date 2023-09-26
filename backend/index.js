const express = require("express");
const { SingDetails } = require("./db");
const { connection } = require("mongoose");

const app = express();
app.use(express.json());


// just to check working or not

app.get("/", (req, res) =>{
    res.send("Hello");
})

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
        res.send("Login Successfully");
    }
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