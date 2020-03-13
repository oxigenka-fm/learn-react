import { useEffect, useReducer } from "react";
import request from "../lib/request";
import useApp from "./useApp";

const initialState = {
  data: null,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      action.setIsLoading(true);
      return {
        data: null,
        error: null
      };
    case "success":
      action.setIsLoading(false);
      return {
        data: action.payload,
        error: null
      };
    case "error":
      action.setIsLoading(false);
      return {
        data: null,
        error: action.payload
      };

    default:
      return state;
  }
};

const useFetch = url => {
  const { controls: { setIsLoading } } = useApp();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "init", setIsLoading });
    request(url)
      .then(data => dispatch({ type: "success", payload: data, setIsLoading }))
      .catch(error => dispatch({ type: "error", payload: error, setIsLoading }));
  }, [url]);

  return [state];
};

export default useFetch;
