import React from "react";
import TrackInput from "./TrackInput"

function TrackForm({ addTrack }) {
    return (
        <div className="track-form">
            <TrackInput handleSubmit={addTrack} />
        </div>
    )
}

export default TrackForm;