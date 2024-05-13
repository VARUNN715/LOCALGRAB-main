const express = require('express')
const users = require("./data.json")
const mongoose = require('mongoose');
const fs = require("fs");
const app = express();
const port = 8006;

mongoose.connect('mongodb://127.0.0.1:27017/god')
.then(()=>console.log("mongodb Connect"))
.catch((err) => console.log("mongo error",err))

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    requried: true
   },
   username:{
    type:String,
   },
   mail:
   {
    type: String,
    required: true,
    unique: true,
   },
   mobile:{
    type: Number,
   }
})


const User = mongoose.model("user",userSchema);


app.use(express.urlencoded({ extended: false}));
// app.get("/users", (req, res)=>{
//     const html =`
//     <ul>
//     ${users.map((user) =><li>%{user.firstName}</li>)}
//     </ul>`;
//     res.send(html);
// })
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
});



// app.get("/api/users",(req, res) =>{
//     res.setHeader("X-myname","van");
//     return res.json(users);
// })
app.post("/submit",async (req,res)=>{
    const body = req.body;
    // if(
    //     body ||
    //     !body.fistName||
    //     !body.lastName||
    //     !body.email||
    //     !body.jobTitle||
    //     !body.gender

    // ){
    //     return res.status(400).json({msg: "all fields are required"});
        
    // }
    
    const result = await User.create({
        name:body.name,
        username: body.username,
        mail: body.mail,
        mobile: body.mobile

    })
    console.log('result',result)
    return res.status(201).json({msg: "success"});
})

app.listen(port,() =>{
    console.log(`server started at port: http://localhost:${port}`)
})