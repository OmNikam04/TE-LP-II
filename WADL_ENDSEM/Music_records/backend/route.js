import express from 'express';
import SongsModel from './model.js';

const router = express.Router();

router.get('/songs', async (req, res) => {
    try {
        const { songName, film, singer, actor, actress, musicDirector } = req.query;
        let query = {};

        if (songName && songName !== "") query.songName = songName;
        if (film && film !== "") query.film = film;
        if (singer && singer !== "") query.singer = singer;
        if (actor && actor !== "") query.actor = actor;
        if (actress && actress !== "") query.actress = actress;
        if (musicDirector && musicDirector !== "") query.musicDirector = musicDirector;

        const songs = await SongsModel.find(query);

        if (songs.length === 0) {
            return res.status(404).json({ success: false, message: 'No songs found' });
        }

        res.status(200).json({ success: true, data: songs });
    } catch (error) {
        console.error(`Error fetching songs: ${error}`);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


// Delete song which I don't like
router.delete('/song/:id', async (req, res) => {
    try {
        const songId = req.params.id;
        const deletedSong = await SongsModel.findByIdAndDelete(songId);
        if (!deletedSong) {
            return res.status(404).json({ success: false, message: 'Song not found' });
        }
        res.status(200).json({ success: true, message: 'Song deleted successfully' });
    } catch (error) {
        console.error(`Error while deleting song: ${error}`);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Add new song which is my favorite
router.post('/songs', async(req, res)=>{
    try {
        const song = new SongsModel(req.body)
        const response = await song.save()
        // console.log(response)
        res.status(201).json({success: true, message:'New song added successfully', data: response})
    } catch (error) {
        console.error(`Error while adding new song ${error}`)
        res.status(500).json({ success: false, message: 'Internal server  error'})
    }
})

// Update the existing record
router.put('/song/:id', async(req, res) => {
    try {
        const songId = req.params.id;
        const updatedFields = req.body;
        const updatedSong = await SongsModel.findByIdAndUpdate(songId, updatedFields, { new: true });
        // Without { new: true }: The method returns the document before any modifications were made.
        // With { new: true }: The method returns the document after the modifications have been applied.

        if (!updatedSong) {
            return res.status(404).json({ success: false, message: 'Song not found' });
        }

        res.status(200).json({ success: true, message: 'Song updated successfully', data: updatedSong });
    } catch (error) {
        console.error(`Error while updating song: ${error}`);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


export default router;
