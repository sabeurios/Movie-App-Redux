import actionTypes from "../Actions/actionTypes";
import movies from "../MovieDB/movies";

const initialState = {
  movies,
  searchName: "",
  searchRate: 0,
};

const reducer = (state = initialState, action) => {
  const { payload,type } = action;
  const {
    INPUT_SEARCH_NAME,
    INPUT_SEARCH_RATE,
    ADD_MOVIE,
    REMOVE_MOVIE,
    UPDATE_MOVIE,
  } = actionTypes;

  switch (type) {
    case INPUT_SEARCH_NAME:
      return {
        ...state,
        searchName: payload.value,
      };

    case INPUT_SEARCH_RATE:
      return {
        ...state,
        searchRate: payload,
      };

    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };

    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === payload.id ? { ...payload } : movie
        ),
      };
    default:
      return state;
  }
};
export default reducer;
