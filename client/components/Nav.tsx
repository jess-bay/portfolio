import { Link } from 'react-router-dom'
import { Education } from './Education'

export function Nav() {
  return (
    <>
      <nav className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4 border-b-2 border-gray-700 sm:flex sm:justify-between sm:items-center">
        <ul className="flex">
          <li className="mr-6">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/about">About Me</Link>
          </li>
          <li className="mr-6">
            <Link
              to="/education"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Education
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/skills"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Skills
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/workhistory"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Work History
            </Link>
          </li>
          <li
            className="mr-6"
            // className="hover:text-gray-300 transition-colors duration-300"
          >
            Projects
          </li>
        </ul>
      </nav>
    </>
  )
}
