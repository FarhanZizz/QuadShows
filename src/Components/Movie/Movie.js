import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import "./Movie.css"
import Modal from "../Modal/Modal"

const Movie = () => {
  const [isOpen, setIsOpen] = useState(false)
  const movie = useLoaderData()
  const { image, name, summary, genres, language, status, rating, premiered } =
    movie
  const genresString = genres.join(", ")
  return (
    <div>
      <div className="movie-grid">
        <img src={image.original} alt="Movie Poster" />
        <div className="movie-details">
          <h1 className="movie-title">{name}</h1>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
          <p>Genre: {genresString}</p>
          <p>Language: {language}</p>
          <p>Status: {status}</p>
          <p>Premiered: {premiered}</p>
          <p>
            Rating: {rating.average ? rating.average : "N/A"}/10{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              {" "}
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                id="mainIconPathAttribute"
                fill="#1eb854"
              ></path>{" "}
            </svg>
          </p>
          <button onClick={() => setIsOpen(true)} className="card-action">
            Book Tickets
          </button>
          {isOpen && <Modal name={name} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  )
}

export default Movie
