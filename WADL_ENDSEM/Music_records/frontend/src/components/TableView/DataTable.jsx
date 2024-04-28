import React from 'react'

const DataTable = ({allSongs, onDelete})=>{
    console.log(allSongs)
    return(
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
                    {allSongs.map((item)=>{
                        return (
                            <tr>
                                <td>{item.songName}</td>
                                <td>{item.film}</td>
                                <td>{item.musicDirector}</td>
                                <td>{item.singer}</td>
                                <td>{item.actress}</td>
                                <td>{item.actor}</td>
                                <td>
                                    <button onClick={()=> onDelete(item._id)} className="btn btn-danger me-2">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default DataTable