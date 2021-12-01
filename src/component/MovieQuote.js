import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import { fetchMovieQuote } from '../thunk/book';


export default function MovieQuote() {
    const dispatch = useDispatch();
    const moviename = useSelector((state) => state.bookDetails.moviequote)
    const { id } = useParams()
    console.log(id)
    console.log(moviename)

    useEffect(() => {
        dispatch(fetchMovieQuote(id))
       
    }, [])

    return (
        <div>
            <h1>
                movie quote page
            </h1>
            {moviename.map((item) => (
                <ul>
                    <li>{item.dialog}</li>
                    <li>{item._id}</li>
                </ul>
            ))}
        </div>
    )
}
