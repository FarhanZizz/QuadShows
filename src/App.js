import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import MainLayout from "./Components/Layout/MainLayout"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
