/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import { Education } from './components/Education'
import Skills from './components/Skills'
import WorkHistory from './components/WorkHistory'
import AboutMe from './components/AboutMe'

interface Props {
  darkTheme: boolean
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home darkTheme={false} />} />
      <Route path="/about" element={<AboutMe darkTheme={false} />} />
      <Route path="/education" element={<Education darkTheme={false} />} />
      <Route path="/skills" element={<Skills darkTheme={false} />} />
      <Route path="/workhistory" element={<WorkHistory darkTheme={false} />} />
    </Route>,
  ),
)

export default router
