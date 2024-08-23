import {
  IconMail,
  IconMailOpened,
  IconPhone,
  IconLocation,
} from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Navbar from "../components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitData = async (e) => {
    e.preventDefault();

    // Create FormData object
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Show loading toast
    Swal.fire({
      title: "Loading",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
    });

    try {
      // Make the POST request
      const res = await axios.post(
        "https://raghuveer-travel.onrender.com/api/v1/user/contact",
        formData
      );

      if (res?.data?.success) {
        Swal.fire({
          icon: "success",
          title: `Thank you ${name} for contacting us!`,
          text: "For further information, please contact: 073511 83413",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Contact failed. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while processing your request. Please try again later.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact-page ">
        <HeroPages name="Contact" />
        <div className="container">
          <br />
          <div>
            <iframe
              className="w-full h-[60vh]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14660.96891009766!2d77.4635353!3d23.2706466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c437aef2d76f5%3A0xfe4284816c098c87!2sRaghuveer%20Travels!5e0!3m2!1sen!2sin!4v1721284940779!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-div">
            <div className="contact-div__text flex col">
              <h2>Need additional information About Raghuveer Travels ?</h2>
              <p>
                A multifaceted professional, Raghuveer Travels, skilled in
                multiple fields of research, development, as well as a learning
                specialist. Over 8 years of experience.
              </p>
              <a href="tel:+919993186451" className="flex">
                <IconPhone /> &nbsp; 9993186451
              </a>
              <a href="mailto:singhsonu21887@gmail.com" className="flex">
                <IconMail /> &nbsp; singhsonu21887@gmail.com
              </a>
              <p className="flex">
                <IconLocation />
                &nbsp; Bhopal
              </p>
            </div>
            {/* <div className="contact-div__form">
              <a href="/" className="flex">
                <IconPhone /> &nbsp; 9993186451
              </a>
              <a href="/" className="flex">
                <IconMail /> &nbsp; anshacabservice@gmail.com
              </a>
              <a href="/" className="flex">
                <IconLocation />
                &nbsp; Dehradun, 
              </a>
            </div> */}
            <div className="contact-div__form ">
              <form onSubmit={submitData}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  placeholder="Write message here.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <button type="submit" className="flex ">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>+91 9993186451</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
