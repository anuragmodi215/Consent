import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landing-page'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element : <LandingPage/>
      }
    ]
  )
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
