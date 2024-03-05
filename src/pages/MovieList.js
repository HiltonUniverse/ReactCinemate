import {Card} from "../components/"
import { useDocumentTitle, useFetch } from "../hooks/"

export const MovieList = ({apiPath, title}) => {

  const {data: movies} = useFetch(apiPath)
  useDocumentTitle(title)
  
  return (
    <main>
      <section className="max-w-7x1 mx-auto py-7">
        {/* justify-start: items start from left and go to the right
        justify-evenly: items are evenly spaced, if this is not set, we will always have
        more space on the right side when we start resizing our screen. */}
        <div className="flex justiy-start flex-wrap other:justify-evenly">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie}/>
          })}
        </div>
      </section>
    </main>
  )
}