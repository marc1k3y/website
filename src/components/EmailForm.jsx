import React, { useState } from "react"
import { send } from "emailjs-com"
import { useSelector } from "react-redux"
import Modal from "./Modal"

export default function EmailForm() {
  const { currentTheme } = useSelector(state => state?.theme)
  const [modal, setModal] = useState(false)
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: ""
  })

  const clearForm = () => {
    setToSend({ ...toSend, from_name: "", message: "", reply_to: "" })
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(
      "service_vnkr5bu",
      "template_7vbhaio",
      toSend,
      "user_x0Z66RspzE2Gvkh1TsUk1"
    )
      .then((response) => {
        setModal(true)
        clearForm()
        setTimeout(() => {
          setModal(false)
        }, 4000)
        console.log("SUCCESS!", response.status, response.text)
      })
      .catch((err) => {
        console.log("FAILED...", err)
      })
  }
  return (
    <div className="email-form">
      <form onSubmit={onSubmit}>
        <h3 style={{ marginTop: "1rem" }}>Contact with me</h3>
        <label htmlFor="reply_to">Your email</label>
        <input
          style={currentTheme?.emailForm?.textFields}
          type="email"
          name="reply_to"
          value={toSend.reply_to}
          onChange={handleChange}
          required
        />
        <label htmlFor="from_name">Your name</label>
        <input
          style={currentTheme?.emailForm?.textFields}
          type="text"
          name="from_name"
          value={toSend.from_name.charAt(0).toUpperCase() + toSend.from_name.slice(1)} // capitalize name
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Your message</label>
        <textarea
          style={currentTheme?.emailForm?.textFields}
          name="message"
          cols="30"
          rows="3"
          value={toSend.message}
          onChange={handleChange}
          required />
        <button
          style={currentTheme?.emailForm?.button}
          type="submit">send
        </button>
      </form>
      <Modal visible={modal}>My feedback is required :)</Modal>
    </div>
  )
}
