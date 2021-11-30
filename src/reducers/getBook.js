import { SHOW_BOOK, SHow_MOVIE, SHOW_MOVIEQUOTE, SHOW_CHARACTER } from "../action";

const intialState = {
    bookresult: [],
    moviedata: [],
    moviequote: [],
    character: [],
}


const bookDetails = (state = intialState, action) => {

    switch (action.type) {
        case SHOW_BOOK:
            return {
                ...state,
                bookresult: action.payload,

            }
        case SHow_MOVIE:
            return {
                ...state,
                moviedata: action.payload,
            }
        case SHOW_MOVIEQUOTE:
            return {
                ...state,
                moviequote: action.payload,
            }
        case SHOW_CHARACTER:
            return {
                ...state,
                character: action.payload,
            }
        default:
            return state;
    }
}

export default bookDetails;