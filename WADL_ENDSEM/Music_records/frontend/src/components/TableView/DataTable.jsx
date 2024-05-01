// DataTable.jsx

import React, { useState } from 'react';
import EditSongForm from './EditSongForm';

const DataTable = ({ allSongs, onDelete, onUpdate }) => {
  const [editedSong, setEditedSong] = useState(null);

  const handleEdit = (song) => {
    setEditedSong(song);
    console.log(song)
  };

  const handleClose = () => {
    setEditedSong(null);
  };

  const handleSave = async (updatedFields) => {
    // Assuming you have a way to collect updated data from the form
    // In this example, I'm assuming you have a separate form component
    // called EditSongForm to collect the updated fields
    // Pass the updated fields to the onUpdate function
    await onUpdate(editedSong._id, updatedFields);
    setEditedSong(null);
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Film Name</th>
            <th>Music director</th>
            <th>Singer</th>
            <th>Actor </th>
            <th>Actress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allSongs.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.songName}</td>
                <td>{item.film}</td>
                <td>{item.musicDirector}</td>
                <td>{item.singer}</td>
                <td>{item.actress}</td>
                <td>{item.actor}</td>
                <td>
                  <button onClick={() => onDelete(item._id)} className="btn btn-danger me-2">
                    Delete
                  </button>
                  <button onClick={() => handleEdit(item)} className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Edit Song Modal */}
      {editedSong && (
            <EditSongForm song={editedSong} onSave={handleSave} onCancel={handleClose} />
      )}
    </>
  );
};

export default DataTable;
