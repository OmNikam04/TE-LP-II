import React from "react";
import { useEffect, useState } from "react";
import { fetchSongs, deleteSong, addSong, filterSongs, updateSong } from "../api";
import DataTable from "./TableView/DataTable";
import AddSongs from "./AddSongs/AddSongs";
const Home = () => {
  const [allSongs, setAllSongs] = useState([]);
  useEffect(() => {
    fetchSongs()
      .then((songs) => setAllSongs(songs))
      .catch((error) => console.error("Error setting songs: ", error));
  }, []);

  const handleDelete = async (songId) => {
    try {
      await deleteSong(songId);
      // Refetch songs after successful deletion
      const updatedSongs = await fetchSongs();
      setAllSongs(updatedSongs);
    } catch (error) {
      console.error("Error deleting song: ", error);
    }
  };

  const handleAdd = async (songData) => {
    try {
      await addSong(songData);
      // Refetch songs after successful addition
      const updatedSongs = await fetchSongs();
      setAllSongs(updatedSongs);
    } catch (error) {
      console.error("Error adding song: ", error);
    }
  };

  const handleFilter = async (filterData) => {
    try {
      console.log('from home', filterData)
      setAllSongs(filterData);
    } catch (error) {
      console.error("Error filtering song: ", error);
    }
  };

  const handleUpdate = async (updatedSong,updatedFields) => {
    try {
      // Assuming you have a way to get updated song data from the user interface
      // In this example, I'm just updating the song name
      // const updatedFields = { songName: 'Updated Song Name' };
      console.log('hmm', updatedFields)
      await updateSong(updatedSong, updatedFields);
      const updatedSongs = await fetchSongs();
      setAllSongs(updatedSongs);
    } catch (error) {
      console.error('Error updating song: ', error);
    }
  };

  return (
    <>
      <div className="container w-100 mt-2">
        <AddSongs onAdd={handleAdd} onFilter={handleFilter} />
        <div className="w-100 mt-5">
          <h1>List of songs</h1>
          {allSongs.length > 0 ? (
            <DataTable allSongs={allSongs} onDelete={handleDelete} onUpdate={handleUpdate} />
          ) : (
            <h4>No songs found</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
