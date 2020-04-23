export const addMovie = (payload) => {
  return {
    type: "ADD_MOVIE",
    payload,
  };
};

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
