import React from "react";
import propTypes from "prop-types";
import App from "./App";


function Movie({title, year, summary, poster}) {
    return (
        <div class="movie__data">
            <h3 class="movie__title" >{title}</h3>
        </div>
        
    )
}

Movie.propTypes = {
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
};


export default App;