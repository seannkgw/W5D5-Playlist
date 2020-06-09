import React from "react";
import Pop from "../categories/Pop";
import Soul from "../categories/Soul";
import Electronic from "../categories/Electronic";

function Category({ tracks }){
    return(
        <div className="categories">
            <h1>Categories</h1>
            <Pop tracks={tracks} />
            <Soul tracks={tracks} />
            <Electronic tracks={tracks} />
        </div>
    )
}

export default Category;