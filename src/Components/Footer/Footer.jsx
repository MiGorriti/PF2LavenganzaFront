import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter , faWhatsapp} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftFooter}>
        <h1>WANDERLUXE</h1>

        <ul>
          <li>Follow us</li>
          <li>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </li>
        </ul>
      </div>

      <div className={styles.rightFooter}>
        <ul className={styles.appData}>
          <li>Support</li>
          <li>Help Center</li>
          <li>Cancellation options</li>
          <li>Report neighbourhood concern</li>
        </ul>

        <ul className={styles.helpData}>
          <li>Hosting</li>
          <li>Ware House your home</li>
          <li>Community Forum</li>
        </ul>

        <ul className={styles.companyData}>
          <li>Carrers</li>
          <li>Invertors</li>
          <li>Gift Cards</li>
        </ul>

        <ul className={styles.hourData}>
          <li>Hours attention</li>
          <li>08am - 01pm</li>
          <li>04pm - 08pm</li>
        </ul>

        <ul className={styles.contactData}>
          <li>Contact</li>
          <li>wanderluxehomes@gmail.com</li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
