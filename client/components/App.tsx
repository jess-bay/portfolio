import { Outlet } from 'react-router-dom'
import { Education } from './Education'
import { Nav } from './Nav'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
