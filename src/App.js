import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Hobbies from "./components/Hobbies"

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "blue" }}
    >
      <header className="App-header">
        <h1>Hello!</h1>
        {
          <Hello
            name="Paco"
            age="21"
          ></Hello>
        }
        <Hobbies />
        <Maths />
      </header>
    </div>
  )
}

export default App
