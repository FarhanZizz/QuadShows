import React, { useState, useEffect } from "react"
import MovieCard from "../MovieCard/MovieCard"
import "./Home.css"

const Home = () => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data))
  }, [])

  return (
    <div className="card-grid">
      {shows.map((show, index) => (
        <MovieCard key={index} show={show} />
      ))}
    </div>
  )
}

export default Home
