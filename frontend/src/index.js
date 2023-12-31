import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { createTheme } from "@mui/material"
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import FunkyExample from "./pages/FunkyExample"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Outlet />}
    >
      <Route
        path="/"
        element={<App />}
      ></Route>
      <Route
        path="funky"
        element={<FunkyExample />}
      />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
