import React from "react"
import "app/App.css"
import { store } from "app/store"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "features/auth/Register/Register"
import Login from "features/auth/Login/Login"
import { AppBar, Box, Button, LinearProgress, Toolbar, Typography } from "@mui/material"
import { GlobalError } from "common/GlobalError/GlobalError"
import "react-toastify/dist/ReactToastify.css"
import { useAppSelector } from "common/hooks/hooks"
import { Navbar } from "app/NavBar"


function App() {

  const isLoading = useAppSelector(state => state.app.isLoading)

  const router = createBrowserRouter([{
    element: <Navbar/>,
    children: [
      { path: "/", element: <div>Hello RTK Cards!</div> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/packs", element: <h1>Packs</h1> }
    ]
  }
  ])

  return (

        <RouterProvider router={router} />

  )
}

export default App
