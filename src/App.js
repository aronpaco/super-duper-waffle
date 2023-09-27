import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Hobbies from "./components/Hobbies"
import Toggle from "./components/Toggle"
import { useState } from "react"
import Show from "./components/Show"

function App() {
  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="App">
      <div className="Container">
        <h1>Hello!</h1>
        <Toggle />
        <Show show={show} />
      </div>
    </div>
  )
}

export default App
