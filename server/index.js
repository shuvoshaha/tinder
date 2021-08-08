import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

// middleware 
app.use(cors())
app.use(express.json())

//mongoose connections
const connections = ''
mongoose.connect(connections)

//end point API
app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.listen(5000, () => {
    console.log("Server is running...")
})