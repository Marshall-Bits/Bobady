import Home from './pages/Home'
import './App.css'
import { UsersProvider } from './context/UsersProvider'
import { Intro } from './pages/Intro'
import { TrickOrTreat } from './pages/TrickOrTreat'
import { Question } from './pages/Question'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Challenge } from './pages/Challenge'
import { Confirmation } from './pages/Confirmation'
import { AddingPoints } from './pages/AddingPoints'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/intro', element: <Intro /> },
  { path: '/trick-or-treat', element: <TrickOrTreat /> },
  { path: '/question', element: <Question /> },
  { path: '/challenge', element: <Challenge /> },
  { path: '/confirmation', element: <Confirmation /> },
  { path: '/adding-points', element: <AddingPoints /> },
  { path: '*', element: <Home /> },
])

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <RouterProvider router={router} />
        {/* <a href='/'>Home</a> */}
      </UsersProvider>
    </div>
  )
}


export default App
