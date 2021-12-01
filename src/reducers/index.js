import { combineReducers } from "redux";
import bookDetails  from "./getBook";
import movies from "./filtermovie";

const reducer=combineReducers({
    bookDetails,
    movies,
})

export default reducer;