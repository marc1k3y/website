import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import EmailForm from "../components/EmailForm"

export default function Main() {
  const { currentTheme } = useSelector(state => state?.theme)
  const [text1, setText1] = useState("")

  useEffect(() => {
    if ("coderApp" || "darkApp" in currentTheme) {
      setText1(">> this main page site")
    } else {
      setText1("this main page site")
    }
  }, [currentTheme])
  return (
    <div className="main-page">
      <h1>Hello world!</h1>
      <div className="main-page-content" style={currentTheme?.main?.content}>
        <p>{text1}</p>
        <EmailForm />
      </div>
    </div>
  )
}
