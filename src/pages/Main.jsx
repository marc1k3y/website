import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function Main() {
  const { currentTheme } = useSelector(state => state.theme)
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")

  useEffect(() => {
    if ("app" in currentTheme) {
      setText1(">> this main page site")
      setText2(">> all content this site sorted at priority")
    } else {
      setText1("this main page site")
      setText2("all content this site sorted at priority")
    }
  }, [currentTheme])
  return (
    <div className="main-page">
      <h1>Hello world!</h1>
      <div className="main-page-content" style={currentTheme?.main?.content}>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  )
}
