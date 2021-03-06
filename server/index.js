import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Cards from './model/model.js'

// app config
const app = express()

// middleware 
app.use(cors())
app.use(express.json())

//mongoose connections
const connections = 'mongodb+srv://sks007:sKs007...@freecluster.abbdz.mongodb.net/centralDB?retryWrites=true&w=majority'
mongoose.connect(connections, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then((res) => {
        console.log("DB connect successfully")
    })
    .catch(err => console.log("DB connect unsuccessfully"))

//end point API
app.get('/', (req, res) => {
    res.send("Hello world")
})

//get all data from db
app.get("/tinder/cards", (req, res) => {
    try {
        Cards.find({}, (err, data) => {
            if (!err) {
                res.status(200).json(data)
            }
            else {
                res.status(500).json({ message: err.message })
            }
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// post data into db
app.post("/tinder/cards", async (req, res) => {
    const cardData = req.body
    try {

        const card = new Cards(cardData)

        await card.save()
        res.status(201).json(card)
        // Cards.create(cardData, (err, data) => {
        //     if (err) {
        //         res.status(500).json({ message: err.message })
        //     }
        //     else {
        //         res.status(201).json(data)
        //     }
        // })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// listen
app.listen(5000, () => {
    console.log("Server is running...")
})