import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import Home from "./Components/Home/Home"
import MainLayout from "./Components/Layout/MainLayout"
import Movie from "./Components/Movie/Movie"

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
        {
          path: "/shows/:id",
          loader: ({ params }) => {
            return fetch(`https://api.tvmaze.com/shows/${params.id}`)
          },
          element: <Movie />,
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
