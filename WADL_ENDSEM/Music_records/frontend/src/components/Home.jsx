import React from "react";
import { useEffect, useState } from 'react'
import { fetchSongs, deleteSong } from '../api'
import DataTable from "./TableView/DataTable";
const Home = () => {
    const [allSongs, setAllSongs] = useState([])
  useEffect(()=>{
    fetchSongs()
      .then(songs => setAllSongs(songs))
      .catch(error => console.error('Error setting songs: ', error))
  }, [])

  const handleDelete = async (songId) => {
    try {
      await deleteSong(songId);
      // Refetch songs after successful deletion
      const updatedSongs = await fetchSongs();
      setAllSongs(updatedSongs);
    } catch (error) {
      console.error('Error deleting song: ', error);
    }
  };

  return (
    <>
      <div className="container w-100 mt-2">
        <h1>Your Songs</h1>
        {allSongs.length > 0 ? (
          <DataTable allSongs={allSongs} onDelete={handleDelete} />
        ) : (
          <h4>No songs found</h4>
        )}
      </div>
    </>
  );
};

export default Home;
