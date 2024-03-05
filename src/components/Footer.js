import { Link } from "react-router-dom"

export const Footer = () => {
  return (
  <footer className="bg-white shadow m-0 dark:bg-gray-800">
        <div className="mx-auto p-7 md:flex md:justify-between border-b-2 dark:border-0">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-500">© 2024 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved. </span>
        <ul className="flex text-gray-500 text-sm item-center">
          <li>
              <a href="https://www.linkedin.com/in/hilton-khadka-a94b58173/" rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
              <a href="https://github.com/hiltonuniverse" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
          </li>
        </ul>
    </div>
    </footer>
  )
}