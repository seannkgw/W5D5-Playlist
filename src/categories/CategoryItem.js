import React from "react"

function CategoryItem({ track }) {

    return (
        <div>
            <p className="trackArtist">{track.artist}</p>
            <p className="trackTitle">{track.trackTitle}</p>
        </div>
    )
}

export default CategoryItem