import React from "react"

const Modal = ({visible, children}) => {
  return (
      <div style={{display: visible ? "flex" : "none"}} className="modal">
        {children}
      </div>
  )
}

export default Modal