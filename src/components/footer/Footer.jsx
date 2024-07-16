import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__socials">
                <a href="https://t.me/m1gunoff" target="_blank" rel="noopener noreferrer" className="home__social-link">
                    <FaTelegramPlane />
                </a>

                <a href="mailto:migunoff21@mail.ru" className="home__social-link">
                    <SiMaildotru />
                </a>
                </div>
            
            <p className="footer__copyright text-cs">
                &copy; 2024 <span>Luique</span>. All Right Reserved
            </p>
            
            <p className="footer__copyright-dev">
                Developed by <span>M1gunoff</span>
            </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
