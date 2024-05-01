export const fetchSongs = async () => {
  try {
    const res = await fetch("http://localhost:4000/api/songs");
    if (!res.ok) {
      throw new Error("Failed to fetch songs");
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(`Error fetching songs: ${error}`);
    throw error;
  }
};

export const deleteSong = async (songId) => {
  try {
    const res = await fetch(`http://localhost:4000/api/song/${songId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete song");
    }
  } catch (error) {
    console.error("Error deleting song: ", error);
    throw error;
  }
};

export const addSong = async (songData) => {
  try {
    const res = await fetch("http://localhost:4000/api/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songData),
    });

    if (!res.ok) {
      throw new Error("Failed to add song");
    }
  } catch (error) {
    console.error("Error adding song: ", error);
    throw error;
  }
};

export const filterSongs = async (songData) => {
  try {
    const queryParams = new URLSearchParams(songData).toString();
    const res = await fetch(`http://localhost:4000/api/songs?${queryParams}`);

    if (!res.ok) {
      throw new Error("Failed to filter songs");
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error filtering song: ", error);
    throw error;
  }
};

export const updateSong = async (songId, updatedFields) => {
  try {
    const response = await fetch(`http://localhost:4000/api/song/${songId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    });

    if (!response.ok) {
      throw new Error(
        "Failed to update song. Server returned " +
          response.status +
          " " +
          response.statusText
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error updating song: " + error.message);
  }
};
