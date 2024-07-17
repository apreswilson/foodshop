import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import { useState } from 'react';

const Footer: React.FC = () => {

  const [formSent, setFormSent] = useState("Send");

  const handleMessageSent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const getInput = new FormData(event.currentTarget);
    const getEmail = getInput.get("Email") as string;
    const getMessage = getInput.get("Message") as string;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(getEmail) && getMessage.length !== 0) {
      setFormSent("Sent Successfully")
      setTimeout(() => {
        setFormSent("Send")
      }, 2000);
    } else {
      setFormSent("Error Sending")
      setTimeout(() => {
        setFormSent("Send")
      }, 2000);
    }

    event.currentTarget.reset();
  }

  return (
    <footer aria-label="Footer">
      <a aria-label="Store Icon Link To Home Page">
        <img src="/store-logo.svg" alt="Food Shop Logo"></img>
        <p>Food Shop</p>
      </a>
      <div className="links" aria-label="Website Pages">
        <p>PAGES</p>
        <ul>
          <li aria-label="Shop">Shop</li>
          <li aria-label="Savings">Save</li>
          <li aria-label="Cart">Cart</li>
          <li aria-label="Login">Login</li>
          <li aria-label="Join / Sign Up">Join</li>
        </ul>
      </div>
      <form className="contact-form" aria-label="Contact Us" onSubmit={handleMessageSent}>
        <p>CONTACT US</p>
        <input type="text" name="Email" placeholder="Email Address"></input>
        <textarea name="Message" placeholder="Message"></textarea>
        <button type="submit">{formSent}</button>
      </form>
      <div className="social-links">
        <p>SOCIALS</p>
        <ul aria-label="Social Media Links">
          <li aria-label="Twitter / X"><FontAwesomeIcon icon={faTwitter} /></li>
          <li aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} /></li>
          <li aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></li>
          <li aria-label="Linked In"><FontAwesomeIcon icon={faLinkedin} /></li>
          <li aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;