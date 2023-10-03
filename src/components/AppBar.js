// src/components/AppBar.js
import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

const AppNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Aron Paco</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppNavBar
