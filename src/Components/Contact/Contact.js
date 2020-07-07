import React, { useState } from "react";
import { Axios, db } from "../../firebase/firebaseConfig";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://us-central1-bruno-portfolio-contact.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section id="contactme">
      <h1 className="contact-title">Say Hi!</h1>
      <div className="container-contact">
        <div className="wrapper-contact">
          <div className="contact">
            <div className="alert">Your Message has been sent</div>
            <form id="contactForm" onSubmit={handleSubmit}>
              <p>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  id="form-name"
                  required=""
                  onChange={updateInput}
                  value={formData.name || ""}
                />
                <span className="error">
                  <i className="fa fa-circle"></i>
                </span>
              </p>
              <br />
              <p>
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail Address"
                  id="form-email"
                  required=""
                  onChange={updateInput}
                  value={formData.email || ""}
                />
                <span className="error">
                  <i className="fa fa-circle"></i>
                </span>
              </p>
              <br />
              <p>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  id="form-subject"
                  onChange={updateInput}
                  value={formData.subject || ""}
                />
              </p>
              <p>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  onChange={updateInput}
                  value={formData.message || ""}
                  rows="4"
                  id="form-message"
                  required=""
                ></textarea>
                <span className="error">
                  <i className="fas fa-circle"></i>
                </span>
              </p>
              <br />
              <p id="btn-form">
                <input type="submit" name="submit" />
              </p>
              <br />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
