import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, X, Menu } from "lucide-react";

const Navbar = ({ toggleDarkMode, darkMode, toggleFilter, isFilterOpen }) => {
  return (
    <div className="max-w-screen mx-auto p-6 border-b dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          EventSpotLite.
        </Link>
        <div className="flex justify-center items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
          <Link to="/register" className="p-2 ml-5 hidden md:flex rounded-full text-white font-bold px-4 py-3 bg-blue-500 dark:bg-blue-500 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Register
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap text-base">
        <NavLink to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 capitalize transition-colors duration-300">
          Events
        </NavLink>
        <NavLink to="/liked" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 capitalize transition-colors duration-300">
          Liked Events
        </NavLink>
        <button onClick={toggleFilter} className="ml-auto sm:hidden">
          {isFilterOpen ? (
            <X size={20} className="text-gray-700" />
          ) : (
            <Menu size={20} className="text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
