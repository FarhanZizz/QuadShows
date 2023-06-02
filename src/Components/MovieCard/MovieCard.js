import React from "react"
import "./MovieCard.css"
import { Link } from "react-router-dom"

const MovieCard = ({ show }) => {
  const { image, name, genres, summary, language, id, status } = show.show

  const words = summary.split(" ")
  const truncatedSummary = words.slice(0, 18).join(" ")
  const finalSummary = truncatedSummary + (words.length > 18 ? "..." : "")
  const genresString = genres.join(", ")
  return (
    <Link to={`/shows/${id}`} className="movie-card">
      <img src={image.medium} alt="Movie Poster" />
      <div className="card-details">
        <h1 className="card-title">{name}</h1>
        <p dangerouslySetInnerHTML={{ __html: finalSummary }}></p>
        <p>Genre: {genresString}</p>
        <p>Language: {language}</p>
        <p>Status: {status}</p>
        <button className="card-action">See Details</button>
      </div>
    </Link>
  )
}

export default MovieCard
