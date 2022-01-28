import React from "react"
import "./App.css"
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import About from "./pages/About"

export default function App() {
  const { currentTheme } = useSelector(state => state?.theme)
  return (
    <div className="App" style={currentTheme?.app?.wrapper}>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}