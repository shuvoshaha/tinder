import express from 'express'
import cors from 'cors'

const app = express()

// middleware 
app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.listen(5000, () => {
    console.log("Server is running...")
})