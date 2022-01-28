import React from "react"
import { useSelector } from "react-redux"

const Modal = ({ visible, children }) => {
  const { currentTheme } = useSelector(state => state?.theme)
  return (
    <div className="modal"
      style={{ display: visible ? "flex" : "none", 
      backgroundColor: currentTheme?.modal?.backgroundColor || "lightgray",
      border: currentTheme?.modal?.border || "2px solid black"}} >
      {children}
    </div>
  )
}

export default Modal