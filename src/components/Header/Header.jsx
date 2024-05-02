import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.header__logo} />
      <Nav />
    </div>
  );
};
export default Header;
