import Mynavbar from "../components/navbar";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Contact() {
  return (
    <div className="parent">
      <Mynavbar />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Have a question, idea, or collaboration in mind? I’d love to hear from
          you!
        </p>
        <h1>Contact Information</h1>
        <div className="section-contact">
          <p className="contact">
            <span className="contact-icone"><MdEmail /></span><br />
            <strong>Email:</strong> billydoumbouya5210@gmail.com
          </p>

          <p className="contact">
            <span className="contact-icone"><BsTelephoneFill /></span><br />
            <strong>Phone/WhatsApp:</strong> +224 623952011 / +234 07056745571
          </p>

          <p className="contact">
            <span className="contact-icone"><GoLocation /></span><br />
            <strong>Location:</strong> Ibadan, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
