import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.topnav}>
      <ul className={styles.topnav__list}>
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
