import React from "react"

function ListItem({ track, deleteTrack }) {

    return (
        <div className="list-item">
            <div>{track.trackTitle}</div>
            <div>{track.artist}</div>
            <div>{track.genre}</div>
            <div>{track.rating}</div>
            <div className="deleteButton" onClick={deleteTrack} value={track.trackTitle}>✖️</div>
        </div>
    )
}

export default ListItem;