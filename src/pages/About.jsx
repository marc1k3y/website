import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import avatar from "../assets/avatar.png"
import coder from "../assets/coder.svg"
import csmnt from "../assets/cosmonaut.svg"
import TimeCounter from "../components/TimeCounter"

export default function About() {
  const { currentTheme } = useSelector(state => state?.theme)
  const [expTime, setExpTime] = useState()

  const interval = setInterval(() => setExpTime(TimeCounter), 1000)

  useEffect(() => () => clearInterval(interval), [interval])

  return (
    <div className="about-page">
      <div className="about-page-avatar">
        <img src={"darkApp" in currentTheme && csmnt || "coderApp" in currentTheme && coder || avatar} alt="avatar" />
      </div>
      <div className="about-page-info">
        <h3>Marck Naberezhnykh</h3>
        <p>marc1k3y</p>
        <div><b>profession:</b> coder</div>
        <div><b>hobby:</b> code, travel, photo, blog</div>
        <div><b>languages:</b> JavaScript, humans, python, java, c++, go</div>
      </div>
      <div className="about-page-exp">
        <h3>my code experience:</h3>
        <div><b>by time:</b> {expTime || "loading.."} </div>
        <div><b>by skills:</b> web application develop, server develop, sys administrate</div>
      </div>
    </div>
  )
}
