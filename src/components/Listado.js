import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import swAlert from '@sweetalert/with-react'

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
    .catch(error => {
      //console.log(error)
      swAlert(
        <h2>Ha ocurrido un error. Intenta más tarde</h2>
      )
    })
  }, [setMovieList]);

  console.log(movieList)
  

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
            <Card style={{ width: "18rem" }} key={idx}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>
                {movie.overview.substring(0,150)}...
              </Card.Text>
              <Link to={`/detalle?movieID=${movie.id}`}>
                <Button variant="outline-danger">Añadir a mi lista</Button>
              </Link>
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
