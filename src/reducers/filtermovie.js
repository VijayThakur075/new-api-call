import {SET_FILTERMOVIE} from '../action'

const initialState = {
   
    movie: {
        runtimeInMinutes: 50, budgetInMillions: 100, orderBy: 'name', order: 'asc'

    },
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERMOVIE:
            return {
                ...state,
                movie: action.payload,
                }
        default:
            return state;
    }
};

export default movies
