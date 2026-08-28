import { useState } from 'react'
import './Contact.css'

const CONTACT_EMAIL = 'luisa.almeidaqui@ufl.edu'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`)
    const body = encodeURIComponent(`${message}\n\nFrom ${name} (${email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <h2>Contact</h2>
        <p className="contact-subline">
          Have a role, project, or question in mind? Send a message below.
          It opens in your email client and isn't stored anywhere.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary pixel-corners">
            Send
          </button>
        </form>

        <p className="contact-note">
          This opens a message in your own email app. Nothing typed here is
          sent to or stored on this site.
        </p>
      </div>
    </section>
  )
}

export default Contact
