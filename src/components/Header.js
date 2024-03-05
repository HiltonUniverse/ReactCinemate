import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from '../assets/logo.png'

export const Header = () => {
  const activeLink = "block py-2 px-1 bg-blue-600 rounded text-white md:text-blue-600 md:bg-transparent md:bg-transparent dark:text-blue-500 dark:bg-transparent"
  const inactiveLink = "block py-2 px-1 text-black rounded hover:bg-slate-500 hover:text-white dark:text-gray-200"

  const [hideSearch, setHideSearch] = useState(true)
  const [hideNav, setHideNav] = useState(true)
  
  //This is to ensure the Navlinks react to screen width change
  //The whole idea is to keep showing NabLinks when we gro from sm to md screen size
  //and we had set setHideNave to false
  useEffect(() => {
    const x = window.matchMedia("(max-width: 768px)")
    const handleWidthChange = (e) => {
      if(e.matches){
        setHideNav(true)
      }else{
        setHideNav(false)
      }
    };
    
    handleWidthChange(x);
    x.addEventListener("change", handleWidthChange)
    return () => {
      x.removeEventListener('change', handleWidthChange);
    };
  }, []);

  // LocalStorage stores data as string, and after we retrieve the data we need to conver it back to appropriate
  // type. If we don't we will not get expected result. If we use JSON.parse for boolean string aka "true"/"false"
  // it will auto convert the string to boolean. The fallback value is false becuse if darkMode returns false, and the fall
  // back value is true, it will always result in true. So we initially set it to false, hence only when darkMode is true
  // the UI will actually be true.
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();

    return navigate(`search?q=${queryTerm}`)
  }

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Cinemate Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-300">Cinemate</span>
        </Link>

        <div className="flex md:order-2">

          {/* DarkMode */}
          <button onClick={() => {setDarkMode(!darkMode)}} className='flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
            {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon w-5 h-5" viewBox="0 0 16 16">
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
            </svg>}
            
          </button>

          <button onClick={() => setHideSearch(!hideSearch)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>

            <form onSubmit={handleSubmit}>
            <input type="text" name="search" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off"/>
            </form>

          </div>
          
          <button onClick={() => setHideNav(!hideNav)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>

          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">

            <div className={`relative ${hideSearch ? "hidden" : ""} mt-3 md:hidden`}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>

              <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off"/>
              </form>
            </div>

            <div className={`${hideNav ? "hidden" : ""}`}>
              <ul className="flex flex-col p-4 text-xl md:p-0 mt-4 font-medium border border-gray-100 
                            rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
                            md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink to="/" className={({isActive}) => {return isActive? activeLink : inactiveLink}} end>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/popular" className={({isActive}) => {return isActive? activeLink : inactiveLink}}>Popular</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/top" className={({isActive}) => {return isActive? activeLink : inactiveLink}}>Top Rated</NavLink>
                </li>
                <li>
                  <NavLink to="/movies/upcoming" className={({isActive}) => {return isActive? activeLink : inactiveLink}}>Upcoming</NavLink>
                </li>
              </ul>
            </div>
            
          </div>

        </div>
      </nav>
    </header>
  )
}