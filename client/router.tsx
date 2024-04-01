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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/workhistory" element={<WorkHistory />} />
    </Route>,
  ),
)

export default router
