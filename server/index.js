const express = require("express");
const cors = require("cors");
const baseURL = "https://localhost:4000"
const app = express();
const port = 4000

// const books = require('./db.json')
const {
    getBooks,
    postBook,
    deleteBook,
} = require('./controller')

app.use(cors());

app.use(express.json());


const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune);

const {getFuture} = require('./controller')
app.get("/api/future", getFuture);



// app.get('/info',(req,res) => {
    
//     res.status(200).json({info:`You're a star ✨ `})

// })

// app.post('/',(req,res) =>{
//     const {parcel} = req.body
//     console.log(parcel)
//     if (!parcel)
// {
//      return res.status(400).send({status: 'failed'})
// }    res.status(200).send({status:'recieved'})
// })


app.get(`/api/books`, getBooks)
app.post(`/api/books`, postBook)
app.delete(`/api/books/:id`,deleteBook)





app.listen(4000, () => console.log("Server running on 4000"));
