import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { setDefaultThemeAction, setCoderThemeAction } from "../store/actions/themeAction"
import { links } from "../links"

export default function Header() {
  const dispatch = useDispatch()
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
        {links.map(link =>
          <NavLink 
          style={currentTheme?.header?.links}
          key={link.title} 
          to={link.to}>{link.title}</NavLink>
        )}
      </div>
    </div>
  )
}
