import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  const base = "px-3 py-2 text-lg font-semibold transition duration-300";
  const active = "text-yellow-400 border-b-2 border-yellow-400";
  const inactive = "text-white hover:text-yellow-400";

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Brand Logo and Name */}
        <div className="flex items-center gap-2 text-yellow-400">
          <FaCode className="text-2xl" />
          <span className="text-2xl font-extrabold tracking-wide">CodeVerse</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${base} ${active}` : `${base} ${inactive}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? `${base} ${active}` : `${base} ${inactive}`
            }
          >
            Courses
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
