import React from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import About from "./pages/About"
import Main from "./pages/Main"

export default function App() {
  const { currentTheme } = useSelector(state => state.theme)
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