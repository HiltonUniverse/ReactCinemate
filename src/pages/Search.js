import {Card} from "../components/"
import { useSearchParams } from "react-router-dom"
import { useDocumentTitle, useFetch } from "../hooks/"

export const Search = ({apiPath}) => {
  //Whe the 2 lines below we get the user types test from the url
  // search=OnePiece, q will return OnePiece
  // q is what we navigate to from Header.js handleSubmit function
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data: movies} = useFetch(apiPath, queryTerm)

  useDocumentTitle(`Search Result for ${queryTerm}`)

  return (
    <main>
      <section className="max-w-7x1 mx-auto py-7">
        <div className="flex justiy-start flex-wrap">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie}/>
          })}
        </div>
      </section>
    </main>
  )
}
