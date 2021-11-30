import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../thunk/book";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export const Movie = () => {
    const dispatch = useDispatch()
    const{id} =useParams()
    const movies = useSelector((state) => state.bookDetails.moviedata)
    console.log(movies)
    useEffect(() => {
        dispatch(fetchMovie(id))

    }, [])
    return (
        <div>
            <h1>
                movie page
            </h1>
            <ul>
                {movies.map((item) => (
                    <li key={item.id}>
                        <li>Movie Name :{item.name}</li>
                        <li>Movie id :{item._id}</li>
                        <Link className="btn btn-warning" to={`/movie/${item.id}/quote`}>movieQuote</Link>

                    </li>

                ))
                }
            </ul>

        </div>
    )
}