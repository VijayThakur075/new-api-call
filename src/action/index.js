export const SHOW_BOOK="SHOW_BOOK";
export const SHow_MOVIE="SHOW_MOVIE";
export const SHOW_MOVIEQUOTE="SHOW-MOVIEQUOTE";
export const SHOW_CHARACTER="SHOW_CHARACTER";


export const showBook=(payload)=>({type: SHOW_BOOK, payload});
export const showMovie=(payload)=>({type: SHow_MOVIE, payload});
export const showMovieqUOTE=(payload)=>({type: SHOW_MOVIEQUOTE, payload});
export const showCharacter=(payload)=>({type: SHOW_CHARACTER, payload});

