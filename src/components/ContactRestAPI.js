import React, { useState } from "react";
import "../Styles/Contact.css";
import axios from "axios";

const SERVICE_ID = "service_yfkze6q"; // 'YOUR_SERVICE_ID'
const TEMPLATE_ID = "template_1amrabo"; // 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = "y_GG6wHP_7HkvfHv3"; // 'YOUR_PUBLIC_KEY'

const ContactRestAPI = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // code fragment
    var data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        to_name: "Renke Cui", // 'YOUR_NAME'
        from_name: name, // 'YOUR_NAME
        reply_to: email, // 'YOUR_EMAIL
        message: message, // 'YOUR_MESSAGE'F
      },
    };

    try {
      const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log("SUCCESS!", response.status, response.text);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactRestAPI;
