import React from "react";
import styles from "./Footer.module.css";
// import MapComponent from "../Mapa/MapComponent";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftFooter}>
        <h1>WANDERLUXE</h1>

        <ul>
          <li>Follow us</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>

      {/* <div className={styles.mapContainer}>
        <MapComponent />
      </div> */}

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
          <li>Whatsapp</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
