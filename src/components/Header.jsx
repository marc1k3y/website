import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { setDefaultThemeAction, setCoderThemeAction, setDarkBlueThemeAction } from "../store/actions/themeAction"
import { links } from "../links"
import light from "../assets/moon-light.svg"
import dark from "../assets/moon-blue.svg"

export default function Header() {
  const dispatch = useDispatch()
  const { currentTheme } = useSelector(state => state?.theme)
  const [mobileNav, setMobileNav] = useState(false)
  const [darkThemeBtn, setDarkThemeBtn] = useState(dark)

  function coderThemeHandler() {
    if ("coderApp" in currentTheme) {
      setDarkThemeBtn(dark)
      dispatch(setDefaultThemeAction())
    } else {
      dispatch(setCoderThemeAction())
    }
  }

  function darkThemeHandler() {
    if (darkThemeBtn === dark) {
      setDarkThemeBtn(light)
      dispatch(setDarkBlueThemeAction())
    } else {
      setDarkThemeBtn(dark)
      dispatch(setDefaultThemeAction())
    }
  }
  return (
    <div className="header" style={currentTheme?.header?.wrapper}>
      <div className="header-logo">
        <div>c
          <img src={darkThemeBtn} width="20" onClick={darkThemeHandler} />
          der website</div>
        <button
          onClick={coderThemeHandler}
          style={currentTheme?.header?.links}>
          {"coderApp" in currentTheme ? "cd.." : "</>"}
        </button>
      </div>
      <div className="header-navbar">
        {links.map(link =>
          <NavLink
            style={currentTheme?.header?.links}
            key={link.title}
            to={link.to}>{link.title}</NavLink>
        )}
      </div>
      <div className="header-burger"
        onClick={() => setMobileNav(!mobileNav)}>≡</div>
      <div className="header-navbar-mobile"
        style={{ display: mobileNav ? "flex" : "none" }}>
        {links.map(link =>
          <NavLink
            key={link.title}
            to={link.to}
            onClick={() => setMobileNav(false)}>{link.title}</NavLink>
        )}
      </div>
    </div>
  )
}
