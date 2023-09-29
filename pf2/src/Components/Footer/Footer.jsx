import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.group}>
          <p>Attendance :</p>
          <p>Help Center</p>
          <p>Get Help With A Security Problem</p>
          <p>Disability Support</p>
          <p>Neighborhood Problems</p>
        </div>
        <div className={styles.group}>
          <p>Known :</p>
          <p>Unique Accommodations</p>
          <p>All Destinations</p>
          <p>Opinions</p>
        </div>
        <div className={styles.group}>
          <p>Contact us :</p>
          <p>wanderluxehomes@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

