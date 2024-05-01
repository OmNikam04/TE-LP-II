import React, { useState } from 'react'
import { addSong, filterSongs } from '../../api'

const AddSongs = ({onAdd, onFilter})=>{
    const [formData, setFormData] = useState({
        songName: '',
        film: '',
        musicDirector: '',
        singer: '',
        actor: '',
        actress: ''
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value 
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await addSong(formData)
            console.log('add', res)
            setFormData({
                songName: '',
                film: '',
                musicDirector: '',
                singer: '',
                actor: '',
                actress: ''
            })

            onAdd()
        } catch (error) {
            console.error('Error adding song: ', error);
        }
    }

    const handleFilter = async(e)=>{
        e.preventDefault()
        try {
            const res = await filterSongs(formData)
            console.log('filtere', res)
            onFilter(res)
        } catch (error) {
            console.error('Error filtering song: ', error);
        }
    }
    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit} className="form shadow p-4">
                <h1>Add Song</h1>
                <div className="row g-2">
                    <div className="col-sm-6">
                        <label htmlFor="songName" className="form-label">Name of song:</label>
                        <input type="text" value={formData.songName} onChange={handleChange} className="form-control" id="songName" required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="singer" className="form-label">Singer:</label>
                        <input type="text" value={formData.singer} onChange={handleChange} className="form-control" id="singer" required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="musicDirector" className="form-label">Music Director:</label>
                        <input type="text" value={formData.musicDirector} onChange={handleChange} className="form-control" id="musicDirector" required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="film" className="form-label">Movie:</label>
                        <input type="text" value={formData.film} onChange={handleChange} className="form-control" id="film" required/>
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="actor" className="form-label">Actor:</label>
                        <input type="text" value={formData.actor} onChange={handleChange} className="form-control" id="actor" required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="actress" className="form-label">Actress:</label>
                        <input type="text" value={formData.actress} onChange={handleChange} className="form-control" id="actress" required/>
                    </div>
                    <div className="col mt-4">
                        <button type='submit' className='btn btn-success w-100'>Add Song</button>
                        <button onClick={handleFilter} className="btn btn-warning w-100 mt-2">Filter</button>
                    </div>
                </div>
                
            </form>
        </div>
        </>
    )
}

export default AddSongs
