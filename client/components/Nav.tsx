import { Link } from 'react-router-dom'
import { Education } from './Education'

export function Nav() {
  return (
    <>
      <ul>
        <li>About Me</li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          {' '}
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/workhistory">Work History</Link>
        </li>
        <li>Projects</li>
      </ul>
    </>
  )
}
