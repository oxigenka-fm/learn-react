import { useState, useEffect } from "react";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts?';

export const useFetch = ({currentPage, limit, order}) => {
  const [] = useState();
  const [] = useState();
  const [] = useState();
  const [] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const  useEffect = () => {
    setIsLoading(true);
    setError(false);

    fetch(`${baseUrl}_page=${params.currentPage}&_limit=${limit}&_order=${order}`)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
        setisLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });

    return { data: posts,  }
  };

};
