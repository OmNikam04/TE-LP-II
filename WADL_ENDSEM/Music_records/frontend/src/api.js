export const fetchSongs = async()=>{
    try {
        const res = await fetch('http://localhost:4000/api/songs')
        if(!res.ok){
            throw new Error('Failed to fetch songs')
        }
        const data = await res.json()
        return data.data;
    } catch (error) {
        console.error(`Error fetching songs: ${error}`)
        throw error
    }
}

export const deleteSong = async(songId) =>{
    try {
        const res = await fetch(`http://localhost:4000/api/song/${songId}`, {method: 'DELETE'})

        if(!res.ok){
            throw new Error('Failed to delete song')
        }
    } catch (error) {
        console.error('Error deleting song: ', error)
        throw error
    }
}