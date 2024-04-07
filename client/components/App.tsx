import { Outlet } from 'react-router-dom'
import { Education } from './Education'
import { Nav } from './Nav'
import { useState } from 'react'
import ThemeButton from './ThemeButton'

function App() {
  const [lightTheme, setLightTheme] = useState(false)

  const changeTheme = () => {
    setLightTheme((previousTheme) => !previousTheme)
  }

  return (
    <>
      <Nav />
      <ThemeButton lightTheme={lightTheme} changeTheme={changeTheme} />
      <Outlet />
    </>
  )
}
export default App
