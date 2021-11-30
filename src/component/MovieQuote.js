import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
//import { useParams } from 'react-router';
import { fetchMovieQuote } from '../thunk/book';

export default function MovieQuote() {
    const dispatch=useDispatch();
    const moviename= useSelector((state)=> state.bookDetails.moviequote)
    // let {id} = useParams()
    console.log(moviename)

    useEffect(()=>{
            dispatch(fetchMovieQuote())
    }, [])
   
    return (
        <div>
            <h1>
                movie quote page
            </h1>
          
            {moviename.map((item)=>(
                <ul>
                <li>{item.Dialog}</li>
                <li>{item._id}</li>
                </ul>
            ))}
           
    
        </div>
    )
}
