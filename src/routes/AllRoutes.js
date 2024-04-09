import {Route, Routes} from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing" title="Cinemate" metaDescription="Best of the best movies that will soon be out in the theater." canocial="/"/>} />
            <Route path="/movie/:id" element={<MovieDetail/> } />
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" title="Popular movies" metaDescription="Popular movie that are currently in the theater." canocial="/movies/popular"/>} />
            <Route path="/movies/top" element={<MovieList apiPath= "movie/top_rated" title="Top Rated movies" metaDescription="Top movies of all times including classics like: The Gofather, The shawshank redemption and others." canocial="/movies/top"/>} />
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming movies" metaDescription="Upcoming movies of this year, romantic, thriller, action, adventure, all you can imagine." canocial="/movies/upcoming"/>} />
            <Route path="search" element={<Search apiPath="search/movie"/>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}
