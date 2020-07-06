import React, { useState } from "react";
import { Axios, db } from "../../firebase/firebaseConfig";

// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="contact-title">Say Hi! 👋</h1>

//         <div>Contact Form</div>
//       </div>
//     );
//   }
// }

// export default Contact;

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
    <section>
      <h1 className="contact-title">Say Hi! 👋</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ""}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={updateInput}
          value={formData.subject || ""}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ""}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
