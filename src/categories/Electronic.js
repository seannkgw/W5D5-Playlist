import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

class Electronic extends Component{
    render() {
        const { tracks } = this.props;
        const electronicTracks = tracks.filter(item =>
            item.genre === "Electronic").map(item => 
            <CategoryItem 
                key={item.id}
                track={item}
            />
        );

        return(
            <div className="category">
                <p>Electronic:</p>
                <div className="category-list">{electronicTracks}</div>
            </div>
        )
    }
}

export default Electronic;