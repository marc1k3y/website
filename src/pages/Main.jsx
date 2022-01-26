import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Main() {
  const { currentTheme } = useSelector(state => state.theme)
  const [text, setText] = useState("")

  useEffect(() => {
    if ("app" in currentTheme) {
      setText(">> this main page site")
    } else {
      setText("this main page site")
    }
  }, [currentTheme])
  return (
    <div className="main-page">
      <h1>Hello world!</h1>
      <div className="main-page-content">
        <p>{text}</p>
      </div>
    </div>
  )
}
