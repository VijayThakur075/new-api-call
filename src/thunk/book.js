import axios from "axios";
import { showBook, showCharacter, showMovie, showMovieqUOTE, showFilterMovie } from "../action";
import { Movie } from "../component/Movie";


const client = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
});

client.defaults.headers.common['Authorization'] = 'Bearer RCfP7mF9KCj1TqxWHahb';

export const fetchBook = () => async (dispatch) => {
    try {
 const response = await client.get('/book');
        dispatch(showBook(response.data.docs));
    } catch (err) {
        console.log(err);
    }
}

export const fetchMovie = (prevFilters) => async (dispatch) => {
    try {
        const params = {
            moviebudget: prevFilters.budgetInMillions,
            movietime: prevFilters.runtimeInMinutes,
            sort: `${prevFilters.orderBy}:${prevFilters.order}`,
          };
        const { data: { docs, ...movie}} = await client.get('/movie',{params});
        dispatch(showMovie( docs));
        dispatch(showFilterMovie(movie))
    } catch (err) {
        console.log(err);
    }
}

export const fetchMovieQuote = (id) => async (dispatch) => {
    console.log(id)
    try {
        const responce = await client.get(`/movie/${id}/quote`);
        dispatch(showMovieqUOTE(responce.data.docs));
    } catch (err) {
        console.log(err);
    }
}

export const fetchCharacter = () => async (dispatch) => {
    try {
        const responce = await client.get('/character');
        dispatch(showCharacter(responce.data.docs));
    } catch (err) {
        console.log(err);
    }
}
