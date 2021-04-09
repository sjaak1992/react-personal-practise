import React from "react";

const Movie = (props) => {

    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </>
    );
};

export default Movie;