import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    songName: String,
    film: String,
    musicDirector: String,
    singer: String
});

const Song = mongoose.model('Song', songSchema);

export default Song;
