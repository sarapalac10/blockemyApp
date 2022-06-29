import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Listado() {
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=b9b8f01cf10467bb105fe2dcbc240863&language=es-ES'
    axios.get(endPoint)
    .then(response => {
      const apiData = response.data
      setMovieList(apiData.results)
    })
  }, [setMovieList]);

  //console.log(movieList)
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log(token, "vacio");
      navigate("/");
    }
  }, []);

  return (
    <div className="row">
      <h1>Últimos lanzamientos- Películas en cartelera</h1>
      <>
      {
        movieList.map( (movie, idx) => {
          return (
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>
                {movie.overview.substring(0,150)}...
              </Card.Text>
              <Button variant="outline-danger">Añadir a mi lista</Button>
            </Card.Body>
          </Card>
          )
        })
      }
      </>
      <Footer />
    </div>
  );
}

export default Listado;
