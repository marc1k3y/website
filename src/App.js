import React from "react"
import "./App.css"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import About from "./pages/About"
import { routes } from "./router"

export default function App() {
  const { currentTheme } = useSelector(state => state?.theme)
  return (
    <div className="App" style={currentTheme?.app?.wrapper}>
      <Header />
      <div className="app-content">
        <Routes>
          {routes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              exact={route.exact} />)}
        </Routes>
      </div>
    </div>
  )
}