import { useState } from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    if (!open) {
      setOpen(true);
      return;
    }
    setOpen(false);
  };

  return (
    <nav className={styles.topnav}>
      <button
        // aria-controls="nav-list"
        // aria-expanded="false"
        className={`${styles.topnav__button} ${open ? styles.open : ""}`}
        onClick={openNav}
      >
        <svg className={styles.hamburger} viewBox="0 0 100 100" width="35">
          <rect
            className={`${styles.line} ${styles.line__top}`}
            width="90"
            height="10"
            x="5"
            y="25"
            rx="5"
          ></rect>
          <rect
            className={`${styles.line} ${styles.line__middle}`}
            width="90"
            height="10"
            x="5"
            y="45"
            rx="5"
          ></rect>
          <rect
            className={`${styles.line} ${styles.line__bottom}`}
            width="90"
            height="10"
            x="5"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>
      <ul
        className={`${styles.topnav__list} ${open ? styles.open : ""}`}
        id="nav-list"
      >
        <li className={styles.topnav__item}>
          <a href="#" className={styles.topnav__link}>
            About
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a href="#" className={styles.topnav__link}>
            Services
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a href="#" className={styles.topnav__link}>
            Projects
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a
            href="#"
            className={`${styles.topnav__link} ${styles.topnav__link_contact}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
