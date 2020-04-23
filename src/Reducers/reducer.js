import actionTypes from "../Actions/actionTypes";
import movies from "../MovieDB/movies";

const initialState = {
  movies,
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  const { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } = actionTypes;
  switch (type) {
    case ADD_MOVIE:
      return {
        movies: [...state.movies, payload],
      };

    case REMOVE_MOVIE:
      return {
        movies: state.movies.filter((movie) => movie.id !== payload),
      };

    case EDIT_MOVIE:
      return {
        movies: state.movies.map((movie) =>
          movie.id === payload.id
            ? { ...movie, isEditable: !movie.isEditable }
            : movie
        ),
      };
    case "UPDATE_MOVIE":
      return {
        movies: state.movies.map((movie) =>
          movie.id === payload.id
            ? {
                ...movie,
                title: payload.title,
                rate: payload.rate,
                imageUrl: payload.imageUrl,
                year: payload.year,
                description: payload.description,
                isEditable: !movie.isEditable,
              }
            : movie
        ),
      };
    default:
      return state;
  }
};
export default reducer;
