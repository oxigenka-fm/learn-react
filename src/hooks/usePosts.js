import useFetch from "./useFetch";

const usePosts = params => {
  return useFetch(`https://my-json-server.typicode.com/oxigenka-fm/learn-react/posts?${params.join('&')}`);
};

export default usePosts;
