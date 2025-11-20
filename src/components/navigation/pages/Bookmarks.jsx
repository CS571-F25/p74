import {useState} from "react";

export default function Bookmarks (props) {
    const [savedRecipes, setSavedRecipes] = useState([]);

    return <div>
        <h1>Bookmarks</h1>
        <h2>Your saved recipes...</h2>
    </div>
}