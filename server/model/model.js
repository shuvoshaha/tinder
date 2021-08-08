import mongoose from 'mongoose';

const modelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgURL: {
        type: String
    }
})

export default mongoose.model("tinder_db", modelSchema)