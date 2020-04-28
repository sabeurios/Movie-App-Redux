export const inputSearchName = (payload) => ({
  type: "INPUT_SEARCH_NAME",
  payload,
});

export const inputSearchRate = (payload) => ({
  type: "INPUT_SEARCH_RATE",
  payload,
});

export const searchMovie = (title, rate) => ({
  type: "SEARCH_MOVIE",
  title,
  rate,
});

export const addMovie = (payload) => ({
  type: "ADD_MOVIE",
  payload,
});

export const removeMovie = (payload) => {
  return {
    type: "REMOVE_MOVIE",
    payload,
  };
};

export const editMovie = (payload) => {
  return {
    type: "EDIT_MOVIE",
    payload,
  };
};

export const updateMovie = (payload) => {
  return {
    type: "UPDATE_MOVIE",
    payload,
  };
};
