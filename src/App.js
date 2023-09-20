import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "blue" }}
    >
      <header className="App-header">
        <Maths />
        {/* <Hello name="Paco"></Hello>
        <Hello
          name="Juhan"
          age={44}
        ></Hello> */}
        <h1>Hello!</h1>
      </header>
    </div>
  )
}

export default App
