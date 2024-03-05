export const Button = ({children}) => {
  return (
    <button className="w-72 text-2xl
                       bg-gradient-to-r from-blue-500 via-blue-700 to-blue-700 rounded-lg 
                       px-5 py-2.5 mr-2 mb-2 text-gray-100 font-medium my-10 dark:text-white">{children}</button>
  )
}