import { GlobalError } from "common/GlobalError/GlobalError"
import { AppBar, Box, Button, LinearProgress, Typography } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import { useAppSelector } from "common/hooks/hooks"

export const Navbar = ()=>{
  // const isLoading = useAppSelector(state => state.app.isLoading)

  return(
  <div>

    {/*{isLoading && <LinearProgress />}*/}
    <GlobalError />

    <AppBar position="static" sx={{ background: "#FCFCFC", padding: 0 }}>
      <div className={"container"}>
        <Box sx={{ padding: "0" }}>
          <Box
            sx={{ padding: "12px 0px", display: "flex", justifyContent: "space-between", width: "100%" }}><Typography
            variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000">
            RTK Cards
          </Typography>
            <Button color="inherit" sx={{
              background: "#366EFF", borderRadius: 7, textTransform: "none",
              fontSize: 16, fontFamily: "Montserrat", paddingLeft: 4, paddingRight: 4
            }}>Sing in</Button></Box>
        </Box>
      </div>
    </AppBar>


    <div className={"container"}>
    </div>
<Outlet/>
  </div>)
}