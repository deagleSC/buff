import React from "react";
import './Feed.css';

import MovieCard from "./MovieCard";
import {useState, useEffect} from "react";
import { sendRequest } from "../sendRequest";
import axios from "axios";

const Feed = () => {

    const url = process.env.REACT_APP_API_URL;
    const image_url = process.env.REACT_APP_IMAGE_URL;
    const key = process.env.REACT_APP_API_KEY;

    const [movies, setMovies] = useState([])

    useEffect(() => {
        
        const getData = async () => {
            let res = await axios.get(`${url}api_key=${key}`)
          
            // console.log(res.data)
            setMovies(res.data.results)
        }

        getData()

    }, [])
    
    return ( 
        <div className="feed row">
            {movies.map((movie) => (
                <MovieCard title={movie.title} image={image_url + movie.backdrop_path} />
            ))}
            {/* <MovieCard title="Movie" image=""/> */}
        </div>
    )
}

export default Feed;