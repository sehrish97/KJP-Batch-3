const express = require ("express")
const app = express()
const port = 4200

const bodyParser = require('body-parser');
// configure the app to use bodyParser()
app.use(bodyParser.json());


// File System
const fs = require("fs")

// DB Path
const db = "./public/db/db.json"


app.get("/read-db", (req, res) => {
    data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    res.json(data)
})


app.get("/find-db/:name", (req, res) => {
    let data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    const name = req.params.name;

    founddata = data.find(user => {
        return user.name == name
    })

    console.log(typeof founddata);

    res.json( typeof founddata !== "undefined" ? founddata : "User not found")
})


app.listen(port,() =>{
    console.log("server is running");
})