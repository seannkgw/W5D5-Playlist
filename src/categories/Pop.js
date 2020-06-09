import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Pop extends Component {
    render() {
        const { tracks } = this.props;
        const popTracks = tracks.filter(item =>
            item.genre === "Pop").map(item =>
                <CategoryItem
                    key={item.id}
                    track={item}
                />
            );

        return (
            <div className="category">
                <p>Pop:</p>
                <div className="category-list">{popTracks}</div>
            </div>
        )
    }
}

export default Pop;