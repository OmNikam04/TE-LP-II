import mongoose from "mongoose";

const Songs = new mongoose.Schema({
    songName: String,
    film: String, 
    singer: String,
    actor: String,
    actress: String,
    musicDirector: String
})

const SongsModel = new mongoose.model("Song", Songs);

export default SongsModel
