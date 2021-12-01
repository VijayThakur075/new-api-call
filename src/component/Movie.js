import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../thunk/book";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { showFilterMovie } from '../action'

export const Movie = () => {
    const dispatch = useDispatch()

    const movies = useSelector((state) => state.bookDetails.moviedata)
    const movie = useSelector((state) => state.movies.movie)

    console.log(movies)

    const onInputChange = (event) => {
        const { value, name } = event.target;
        dispatch(showFilterMovie({ [name]: value }))
    }

    useEffect(() => {
        const getRcords = () => {
            dispatch(fetchMovie(movie))
        };
        getRcords();
    }, [movie.runtimeInMinutes, movie.budgetInMillions, movie.orderBy, movie.order])
    
    return (
        <div>
            <h1>
                movie page
            </h1>
            <label>runtimeInMinutes :</label>
            <select name="runtimeInMinutes" value={movie.runtimeInMinutes} onChange={onInputChange}>
                <option value={125}>125</option>
                <option value={175}>175</option>
                <option value={200}>200</option>
            </select>

            <label>budgetInMillions :</label>
            <select name="budgetInMillions" value={movie.budgetInMillions} onChange={onInputChange}>
                <option value={200}>200</option>
                <option value={250}>250</option>
                <option value={300}>300</option>
                <option value={400}>400</option>
            </select>

            <select name="orderBy" value={movie.orderBy} onChange={onInputChange}>
                <option value="rottenTomatoesScore">score</option>
                <option value="boxOfficeRevenueInMillions">review</option>
                <option value="academyAwardNominations">nomination</option>

            </select>
            <select name="order" value={movie.order} onChange={onInputChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>

            <ul>
                {movies.map((item) => (
                    <li key={item.id}>
                        <li>Movie Name :{item.name}</li>
                        <li>Movie id :{item._id}</li>
                        <li>Movie budgetInMillions :{item.budgetInMillions}</li>
                        <li>Movie runtimeInMinutes :{item.runtimeInMinutes}</li>
                        <Link className="btn btn-warning" to={`/moviequote/${item._id}`}>movieQuote</Link>
                    </li>
                ))
                }
            </ul>

        </div>
    )
}