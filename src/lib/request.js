const request = url => fetch(url).then(response => response.json());

export default request;
