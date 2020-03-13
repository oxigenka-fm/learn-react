import { useEffect, useReducer } from "react";
import request from "../lib/request";

const initialState = {
  isLoading: false,
  data: null,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return {
        isLoading: true,
        data: null,
        error: null
      };
    case "success":
      return {
        isLoading: false,
        data: action.payload,
        error: null
      };
    case "error":
      return {
        isLoading: false,
        data: null,
        error: action.payload
      };

    default:
      return state;
  }
};

const useFetch = url => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "init" });
    request(url)
      .then(data => dispatch({ type: "success", payload: data }))
      .catch(error => dispatch({ type: "error", payload: error }));
  }, [url]);

  return [state];
};

export default useFetch;
