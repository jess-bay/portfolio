import { Outlet } from 'react-router-dom'
import { Education } from './Education'
import { Nav } from './Nav'
import { useEffect, useState } from 'react'
import ThemeButton from './ThemeButton'
import WorkHistory from './WorkHistory'
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
        <Nav />
        <ThemeButton darkTheme={darkTheme} changeTheme={changeTheme} />
        <Home />
        <AboutMe />
        <Education darkTheme={darkTheme} />
        <Skills />
        <WorkHistory darkTheme={darkTheme} />
        <Projects />
      </div>
    </>
  )
}
export default App
