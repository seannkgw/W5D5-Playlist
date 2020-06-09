import React from "react";

function TrackInput({handleSubmit}) {
    const onSubmit = (event) => {
        event.preventDefault();
        const input = event.target
        const newTrack = {
            trackTitle: input.trackTitle.value,
            artist: input.artist.value,
            genre: input.genre.value,
            rating: input.rating.value
        }
        handleSubmit(newTrack);
    }
    return (
        <form className="track-input" onSubmit={onSubmit}>
            <input
                placeholder="Track"
                name="trackTitle"
            />
            <input
                placeholder="Artist"
                name="artist"
            />
            <select name="genre">
                <option value="">-</option>
                <option value="Electronic">Electronic</option>
                <option value="Pop">Pop</option>
                <option value="Soul">Soul</option>
            </select>
            <select
                name="rating"
            >
                <option value="">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>Add Track</button>
        </form>
    )
}

export default TrackInput;