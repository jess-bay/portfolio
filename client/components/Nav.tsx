import { Link } from 'react-router-dom'
import { Education } from './Education'
import ScrollToSection from './ScrollToSection'

interface NavProps {
  darkTheme: boolean
}

export function Nav({ darkTheme }: NavProps) {
  return (
    <>
      <nav
        className={`p-4 border-b-2 border-gray-700 flex justify-center `}
        style={{
          backgroundColor: darkTheme
            ? 'rgba(128, 0, 128, 0.5)'
            : 'rgba(255, 255, 255, 0.5)',
        }}
        id="nav"
      >
        <ul className="flex justify-center items-center">
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
          <li className="mr-6">Projects</li>
        </ul>
      </nav>
    </>
  )
}
