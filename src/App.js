import { useState } from "react"
import "./App.css"
import Toggle from "./components/Toggle"
import Show from "./components/Show"
import Maths from "./components/Maths"
import MyForm from "./components/MyForm"
import PropDrilling from "./components/PropDrilling"
import Context from "./components/Context"
import Fetching from "./components/Fetching"
import AppBar from "./components/AppBar"
import React from "react"
import ButtonAppBar from "./components/ButtonAppBar"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { Typography } from "@mui/material"
import InterestList from "./components/InterestList"
import UserList from "./components/UserList"
import RandomPosts from "./components/RandomPosts"

function App() {
  const [show, setShow] = useState(true)
  const interests = ["Reading", "Hiking", "Cooking", "Gaming"]
  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="AppBar">
      <ResponsiveAppBar />
      <div className="Container">
        <Typography
          variant="h3"
          gutterBottom
        >
          Aron
        </Typography>
        <Typography variant="h6">
          <InterestList interests={interests} />
        </Typography>
        <Context />
        <MyForm />
        <UserList />
        <RandomPosts />
      </div>
    </div>
  )
}

export default App
