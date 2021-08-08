import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Cards from './model/model.js'

const app = express()

// middleware 
app.use(cors())
app.use(express.json())

//mongoose connections
const connections = 'mongodb+srv://sks007:sks007..@cluster0.abbdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(connections, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then((res) =>{
    console.log("DB connect successfully")
})
.catch(err =>console.log("DB connect unsuccessfully") )

//end point API
app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.post("/tinder/cards", (req, res) =>{
    const cardData = req.body
   try{
       Cards.create(cardData, (err, data) =>{
           if(err){
            res.status(500).json({message: err.message})
           }
           else{
             res.status(500).json(cardData)
           }
       })
   }
   catch(err){
       res.status(500).json({message: err.message})
   }
})

app.listen(5000, () => {
    console.log("Server is running...")
})