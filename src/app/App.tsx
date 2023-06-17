import React from "react"
import "app/App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from "features/auth/Register/Register"
import Login from "features/auth/Login/Login"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>Hello RTK Cards!</div> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/packs", element: <h1>Packs</h1> }
  ])

  return (
    <>

        <AppBar position="static" sx={{background: '#FCFCFC', padding: 0}}>
          <div className={'container'}>
          <Box sx={{padding: '0'}}>
            <Box sx={{padding: '12px 0px', display: 'flex', justifyContent: 'space-between', width: '100%'}}><Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000">
              RTK Cards
            </Typography>
              <Button color="inherit" sx={{ background: "#366EFF", borderRadius: 7, textTransform: "none",
                fontSize: 16, fontFamily: "Montserrat", paddingLeft: 4, paddingRight: 4
              }}>Sing in</Button></Box>
          </Box>
          </div>
        </AppBar>


      <div className={'container'}>
        <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App
