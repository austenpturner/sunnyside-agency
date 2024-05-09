import styles from "./Feature.module.scss";
import PropTypes from "prop-types";

const Feature = (props) => {
  const { header, text, theme } = props;
  return (
    <div className={styles.feature}>
      <h2 className={`${styles.feature__header} ${styles.header}`}>{header}</h2>
      <p className={`${styles.feature__text} ${styles.text}`}>{text}</p>
      <button
        className={
          theme === "pink"
            ? `${styles.feature__button} ${styles.feature__button_pink}`
            : `${styles.feature__button} ${styles.feature__button_yellow}`
        }
      >
        learn more
      </button>
    </div>
  );
};

Feature.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.string,
};

export default Feature;
