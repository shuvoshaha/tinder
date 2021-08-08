import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

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
.then(res =>{
    console.log("DB connect successfully")
})
.catch(err){
    onsole.log("DB connect unsuccessfully")
}

//end point API
app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.listen(5000, () => {
    console.log("Server is running...")
})