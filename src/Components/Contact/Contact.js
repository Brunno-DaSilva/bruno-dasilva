import React, { Component } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "bruno_portfolio_message",
        "#contactForm",
        "user_oyLJWpa6rPOwCCyxCKMdJ"
      )
      .then()
      .catch();
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  render() {
    return (
      <section id="contactme">
        <h1 className="contact-title animated fadeInLeft">Say Hi!</h1>
        <div className="container-contact animated fadeInRight">
          <div className="wrapper-contact">
            <div className="contact ">
              <div className="alert">Your Message has been sent</div>
              <form
                onSubmit={this.handleSubmit}
                className="animated delay-1s fadeInRight"
                id="contactForm"
              >
                <p>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    id="form-name"
                    required=""
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <span className="error">
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
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
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <span className="error">
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                  </span>
                </p>
                <br />
                <p>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    id="form-subject"
                    value={this.state.subject}
                    onChange={this.handleChange}
                  />
                </p>
                <p>
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    rows="4"
                    id="form-message"
                    required=""
                  ></textarea>
                  <span className="error">
                    <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
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
  }
}

export default Contact;
