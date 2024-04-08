import { Link } from 'react-router-dom'
import { Education } from './Education'
import ScrollToSection from './ScrollToSection'

interface NavProps {
  darkTheme: boolean
}

export function Nav() {
  return (
    <>
      <nav className="text-white p-4 border-b-2 border-gray-700 sm:flex sm:justify-between sm:items-center">
        <ul className="flex">
          <li className="mr-6">
            <Link to="/" onClick={ScrollToSection}>
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/about" onClick={ScrollToSection}>
              About Me
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/education"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={ScrollToSection}
            >
              Education
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/skills"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={ScrollToSection}
            >
              Skills
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/workhistory"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={ScrollToSection}
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
