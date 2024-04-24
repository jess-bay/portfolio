import { Education } from './Education'
import { Nav } from './Nav'
import { useState } from 'react'
import ThemeButton from './ThemeButton'
import Skills from './Skills'
import Home from './Home'
import AboutMe from './AboutMe'
import Projects from './Projects'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const changeTheme = () => {
    setDarkTheme((previousTheme) => !previousTheme)
    document.documentElement.classList.toggle('dark-theme', !darkTheme)
    document.documentElement.classList.toggle('light-theme', darkTheme)
  }

  return (
    <>
      <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
        <Nav darkTheme={darkTheme} />
        <ThemeButton darkTheme={darkTheme} changeTheme={changeTheme} />
        <Home darkTheme={darkTheme} />
        <AboutMe darkTheme={darkTheme} />
        <Education darkTheme={darkTheme} />
        <Skills darkTheme={darkTheme} />
        <Projects darkTheme={darkTheme} />
      </div>
    </>
  )
}
export default App
