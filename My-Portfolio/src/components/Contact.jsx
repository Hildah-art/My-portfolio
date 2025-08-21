import React from "react";
import "../styles/index.css";
import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact reveal">
      <h2>Contact Me</h2>
      <p>Let’s connect! 🚀</p>

      <div className="contact-links">
        {/* Email */}
        <a href="mailto:njagahildah@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className="icon" /> Email Me
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254741740772"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="icon whatsapp" /> Chat on WhatsApp
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/hildaa._______"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="icon instagram" /> Instagram
        </a>
      </div>

      {/* Optional Contact Form */}
      <form
        action="https://formspree.io/f/mayvlqgy"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
