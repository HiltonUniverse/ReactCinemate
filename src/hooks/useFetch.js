import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_TMDB_API_KEY.replace(";", "")}&query=${queryTerm}`
    console.warn("URL IS:", url)
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const result = await response.json();
          setData(result.results);
        }
    
        fetchMovies();
      }, [url])
    

  return {data}
}