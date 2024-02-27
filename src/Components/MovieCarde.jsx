import React from "react";
import StarRating from "./StarRating";
import EditMovie from "./EditMovie";

const MovieCarde = ({ film, deleteFunction,handleEdit }) => {
  return (
    <div className="movie-card">
      <h3>{film.name}</h3>
      <img src={film.image} alt={film.name} />
      <StarRating rating={film.rating} />
      <p>{film.date}</p>
      <div>
        <button className="btn" onClick={() => deleteFunction(film.id)}>
          Delete
        </button>
        <EditMovie  movie={film}  handleEdit={handleEdit}/>
      </div>
    </div>
  );
};

export default MovieCarde;
