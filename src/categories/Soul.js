import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Soul extends Component{
    render() {
        const { tracks } = this.props;
        const soulTracks = tracks.filter(item =>
            item.genre === "Soul").map(item => 
            <CategoryItem 
                key={item.id}
                track={item}
            />
        );

        return(
            <div className="category">
                <p>Soul:</p>
                <div className="category-list">{soulTracks}</div>
            </div>
        )
    }
}

export default Soul;