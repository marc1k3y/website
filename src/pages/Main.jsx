import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import EmailForm from "../components/EmailForm"

export default function Main() {
  const { currentTheme } = useSelector(state => state?.theme)
  const [text1, setText1] = useState("")

  useEffect(() => {
    switch (currentTheme?.title) {
      case "coder":
        setText1(">> this main page site")
        break
      // need any
      case "dark-blue":
        setText1(">> this main page site")
        break
      default:
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
