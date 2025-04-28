import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";

function Contact() {
  return (
    <div className="parent">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Have a question, idea, or collaboration in mind? I’d love to hear from
          you!
        </p>
        <h1>Contact Information</h1>
        <div className="section-contact">
              <a href="billydoumbouya5210@gmail.com" className="contact-link">
                Leave a message to our <br />
                <span className="contact-icone">
                  {" "}
                  <MdEmail />
                </span>
              </a>
            <br />
         
         
              <a
                href="https://wa.me/qr/IYPKJQ7UBL7YG1"
                className="contact-link"
              >
                Contact us by <br />
                <span className="contact-icone">
                  {" "}
                  <FaWhatsapp />
                </span>
              </a>
          
            <br />
          
              <a
                href="https://maps.app.goo.gl/jxxZsaC7sQg68hRRA"
                className="contact-link"
              >
                {" "}
                See our location <br />
                <span className="contact-icone">
                  <GoLocation />
                </span>
              </a>
            <br />
        </div>
      </div>
    </div>
  );
}

export default Contact;
