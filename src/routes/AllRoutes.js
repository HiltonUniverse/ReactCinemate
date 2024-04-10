import {Route, Routes} from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" 
              title="Cinemate" 
              metaDescription="Best of the best movies that will soon be out in the theater." 
              canocial="/"/>} />

            <Route path="/movie/:id" element={<MovieDetail/> } />
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" title="Popular movies" metaDescription="Explore the most popular movies trending worldwide. Discover blockbuster hits, critically acclaimed films, and fan-favorite classics that are captivating audiences everywhere." canocial="/movies/popular"/>} />
            <Route path="/movies/top" element={<MovieList apiPath= "movie/top_rated" title="Top Rated movies" metaDescription="Dive into a curated collection of top-rated movies loved by both critics and audiences. From award-winning masterpieces to hidden gems, find cinematic excellence at its finest." canocial="/movies/top"/>} />
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming movies" metaDescription="Stay ahead of the curve with our preview of upcoming movies. Get a sneak peek at highly anticipated releases, exciting sequels, and promising debuts set to hit theaters soon." canocial="/movies/upcoming"/>} />
            <Route path="search" element={<Search apiPath="search/movie"/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}
