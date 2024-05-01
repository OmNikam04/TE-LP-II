// EditSongForm.jsx

import React, { useState } from 'react';

const EditSongForm = ({ song, onSave, onCancel }) => {
  const [editedFields, setEditedFields] = useState({
    songName: song.songName,
    film: song.film,
    musicDirector: song.musicDirector,
    singer: song.singer,
    actor: song.actor,
    actress: song.actress,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditedFields({
      ...editedFields,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="songName">Song Name:</label>
        <input type="text" className="form-control" id="songName" value={editedFields.songName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="film">Film Name:</label>
        <input type="text" className="form-control" id="film" value={editedFields.film} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="musicDirector">Music Director:</label>
        <input type="text" className="form-control" id="musicDirector" value={editedFields.musicDirector} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="singer">Singer:</label>
        <input type="text" className="form-control" id="singer" value={editedFields.singer} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="actor">Actor:</label>
        <input type="text" className="form-control" id="actor" value={editedFields.actor} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="actress">Actress:</label>
        <input type="text" className="form-control" id="actress" value={editedFields.actress} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditSongForm;
