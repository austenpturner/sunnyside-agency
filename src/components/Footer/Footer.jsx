import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo-footer.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";

const socialLinks = [
  { src: facebookIcon, alt: "Facebook icon" },
  { src: instagramIcon, alt: "Instagram icon" },
  { src: twitterIcon, alt: "Twitter icon" },
  { src: pinterestIcon, alt: "pinterest icon" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" className={styles.footer__logo} />
      <nav className={styles.footer__nav}>
        <ul className={styles.footer__nav_list}>
          <li className={styles.footer__nav_link}>
            <a href="">About</a>
          </li>
          <li className={styles.footer__nav_link}>
            <a href="">Services</a>
          </li>
          <li className={styles.footer__nav_link}>
            <a href="">Projects</a>
          </li>
        </ul>
      </nav>
      <div className={styles.footer__socialContainer}>
        {socialLinks.map((social) => {
          const { id, src, alt } = social;
          return (
            <button key={id} className={styles.footer__socialLink}>
              <a href="">
                <img src={src} alt={alt} />
              </a>
            </button>
          );
        })}
      </div>
    </footer>
  );
};
export default Footer;
