
import CartWidget from "./cartWidget";
import {Link} from "react-router-dom";

export default function NavBar({appName="Untitled App"}){
    return (
    <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">

  
<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
          <Link to="/"
            className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <svg
              className="h-6 w-6 inline-block fill-current text-yellow-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
            </svg>
            {appName}
          </Link>
          </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link to="/"
                className="inline-block py-2 px-4 text-black font-bold no-underline">Home</Link>
            </li>
            <li className="mr-3">
              <Link to="/categories"
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">Categorias</Link>

            </li>
            <li className="mr-3">
              <Link to="/favs"
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">Favorites</Link>
              
            </li>
          </ul>

          <CartWidget />

        </div>
        
        </div>
    </nav>

    );
}