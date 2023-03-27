import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/logo/logo2.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles['footer']}>
        <img src={logo2} alt="amazon-footer-logo" />
        <p className={styles['footer-link']}>
            <Link to="/" >Terms and Privacy Notice</Link>
            <Link to="/" >Send us Feedback</Link>
            <Link to="/" >Help</Link>
        </p>
        <p className={styles['footer-copyright']}>&#169; Amazon Prime Clone</p>
    </div>
  )
}

export default Footer;
