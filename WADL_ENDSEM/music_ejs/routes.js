import express from 'express';
import Song from './models.js';

const router = express.Router();

router.post('/addSongs', async (req, res) => {
    try {
        const song = new Song(req.body);
        console.log(req.body)
        await song.save();
        
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.render("a2.ejs", { songs: songs }); 
    } catch (err) {
        res.status(500).send(err);
    }
});


export default router;
