import styles from "./Hero.module.scss";
import mobileImg from "../../assets/images/mobile/image-header.jpg";
import desktopImg from "../../assets/images/desktop/image-header.jpg";
import arrowSvg from "../../assets/images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__header}>We are creatives</h1>
      <img
        src={arrowSvg}
        alt="arrow pointing down"
        className={styles.hero__arrow}
      />
      <img
        src={mobileImg}
        alt="orange slice"
        className={`${styles.hero__image} ${styles.hero__image_mobile}`}
      />
      <img
        src={desktopImg}
        alt="orange slice"
        className={`${styles.hero__image} ${styles.hero__image_desktop}`}
      />
    </section>
  );
};
export default Hero;
