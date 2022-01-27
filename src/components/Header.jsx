import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import { setDefaultThemeAction, setCoderThemeAction } from "../store/actions/themeAction"

export default function Header() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { currentTheme } = useSelector(state => state.theme)

  function changeTheme() {
    "app" in currentTheme
      ? dispatch(setDefaultThemeAction())
      : dispatch(setCoderThemeAction())
  }

  return (
    <div className="header" style={currentTheme?.header?.wrapper}>
      <div className="header-logo">
        <div>coder website</div>
        <button
          onClick={changeTheme}
          style={currentTheme?.header?.links}>
          {"app" in currentTheme ? "cd.." : "</>"}
        </button>
      </div>
      <div className="header-navbar">
        <NavLink
          to={location.pathname === "/website/" ? "/website/about" : "/website/"}
          style={currentTheme?.header?.links}>
          {location.pathname === "/website/" ? "About" : "Main"}
        </NavLink>
      </div>
    </div>
  )
}
