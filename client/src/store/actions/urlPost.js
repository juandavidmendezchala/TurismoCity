export const URL_INFO = "URL_INFO";

export const urlPost = (url) => {
  return function (dispatch) {
    dispatch({ type: URL_INFO, payload: url });
    localStorage.setItem("urlImage", JSON.stringify(url));
  };
};
