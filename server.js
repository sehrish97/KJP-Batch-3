const express = require ("express")
const app = express()
const port = 4200
// var JSONDATA = [
//     {
//         name: "Ayesha", 
//         age: 18,
//         image: "https://reqres.in/img/faces/3-image.jpg"
//     },
//     {
//         name: "Ahmed", 
//         age: 25,
//         image: "https://reqres.in/img/faces/1-image.jpg"
//     },
//     {
//         name: "Sana", 
//         age: 18,
//         image: "https://reqres.in/img/faces/2-image.jpg"
//     },
//     {
//         name: "Hasan", 
//         age: 79,
//         image: "https://reqres.in/img/faces/4-image.jpg"
//     },
//     {
//         name: "Sana", 
//         age: 79,
//         image: "https://reqres.in/img/faces/4-image.jpg"
//     }
// ]


const fs = require('fs');
const db = './public/db/db.json';

// 
const bodyParser = require('body-parser');
// configure the app to use bodyParser()
app.use(bodyParser.json());


app.get("/", (req, res) => {
    console.log("home page ");
    console.log(req.query);
    res.send("home page")
})
app.get("/about/:name/:age/:marks", (req, res) => {
    console.log( req.params);
    res.send(req.params)
})
app.get("/contact", (req, res) => {
    console.log("contact page");
    res.send("contact pager")
})                  
app.get("/my-query", (req, res) => {
    console.log(req.query);
res.send(req.query)
})
app.post("/postdata", (req, res) => {
    res.send(req.body)
    console.log(res.send(req.body));
})
app.get("/data", (req, res) => {
    console.log("home page ");
    console.log(req.query);
    res.send(JSONDATA)
})

app.get("/read-db", (req, res) => {
    data = JSON.parse(fs.readFileSync(db, "utf-8"))    
    res.json(data)
})


app.get("/find-data/:name", (req, res) => {
   let data = JSON.parse(fs.readFileSync(db, "utf-8"))
    const name = req.params.name;
    
    console.log("find data page ");

    const datafound = data.find(item => {
        return item.name == name
    })

    console.log(typeof datafound);

    
    res.json( typeof datafound !== "undefined" ? datafound : "User not found")
})

// app.get("/filterdata/:name", (req, res) => {
//     console.log("find data page ");
//     let data = JSON.parse(fs.readFileSync(db, "utf-8"))
//     const name = req.params.name;
//     console.log(req.params.name);

//     const founddata = data.filter(item => {
//         return item.name == req.params.name
//     })

//     res.send(data)
// })








app.listen(port,() =>{
    console.log(`"server is running" ${port}`);
})