import React, { Component } from "react"
import ListItem from "./ListItem"

class TrackList extends Component {
    render() {
        const { tracks, deleteTrack } = this.props;
        const listItems = tracks.map(item => (
            <ListItem
                key={item.id}
                track={item}
                deleteTrack={deleteTrack}
            />
        ))

        return (
            <div className="track-list">
                {listItems}
            </div>
        )
    }
}

export default TrackList;