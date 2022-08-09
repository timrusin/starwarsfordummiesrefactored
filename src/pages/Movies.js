import React, { useState, useEffect } from "react";
import '../css/MovieCard.css'
import { Container, Spinner } from "reactstrap";


const Movies = ()=>{

    const [movies, setMovies] = useState()

    useEffect(()=> {
        fetch('https://swapi.dev/api/films/')
        .then((res)=>res.json())
        .then((json)=>setMovies(json))
    },[])
    if(!movies){
        return (
            <Container>
            <Spinner color="warning" type="border"></Spinner>
            </Container>
        )
    }
    const moviesArray = movies.results
    console.log(moviesArray);
   
    return(
    <Container>
        <div className="card-container">
            {moviesArray.map((item, i)=>{
            return(
                <Container key={item.title}>
                    <div className="movie-container">
                        <h1 className="movie-name">{ item.title }</h1>
                        <ul className="movie-specs-list">
                            <li>Episode: { item.episode_id }</li>
                            <li>Director: { item.director }</li>
                            <li>Released: { item.release_date }</li>
                            <li>Producer(s): { item.producer }</li>
                        </ul>
                        <div>
                            <p className="movie-intro-crawl" >
                                { item.opening_crawl }
                            </p>
                        </div>
                    </div>
                </Container>
                )
            })}
        </div>
    </Container>
    )
}

export default Movies