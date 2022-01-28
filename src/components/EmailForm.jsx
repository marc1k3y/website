import React, {useState} from "react"
import {send} from "emailjs-com"
import {useSelector} from "react-redux";

export default function EmailForm() {
  const {currentTheme} = useSelector(state => state?.theme)
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: ""
  })

  const clearForm = () => {
    setToSend({...toSend, from_name: "", message: "", reply_to: ""})
  }

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value})
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
          alert("I will definitely answer!")
          clearForm()
          console.log("SUCCESS!", response.status, response.text)
        })
        .catch((err) => {
          console.log("FAILED...", err)
        })
  }
  return (
      <div className="email-form">
        <form onSubmit={onSubmit}>
          <h3 style={{marginTop: "1rem"}}>Contact with me</h3>
          <input
              style={currentTheme?.emailForm?.textFields}
              type="email"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
              required
          />
          <input
              style={currentTheme?.emailForm?.textFields}
              type="text"
              name="from_name"
              placeholder="Your name"
              value={toSend.from_name}
              onChange={handleChange}
              required
          />
          <textarea
              style={currentTheme?.emailForm?.textFields}
              name="message"
              cols="30"
              rows="3"
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
              minLength="5"
              required/>
          <button
              style={currentTheme?.emailForm?.button}
              type="submit">send
          </button>
        </form>
      </div>
  )
}
