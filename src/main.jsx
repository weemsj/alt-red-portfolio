import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import About from './pages/About.jsx'
import WorkInProgress from './pages/WorkInProgress.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  [
    {
      path: import.meta.env.BASE_URL,
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Projects /> },
        { path: 'projects/:slug', element: <ProjectDetail /> },
        { path: 'about', element: <About /> },
        { path: 'work-in-progress', element: <WorkInProgress /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
