import styles from "./Grid.module.scss";
import PropTypes from "prop-types";

const Service = (props) => {
  const { header, text, theme } = props;
  return (
    <div
      className={
        theme === "cherry"
          ? `${styles.service} ${styles.service_cherry}`
          : `${styles.service} ${styles.service_orange}`
      }
    >
      <h2
        className={
          theme === "cherry"
            ? `${styles.header} ${styles.service__header_cherry}`
            : `${styles.header} ${styles.service__header_orange}`
        }
      >
        {header}
      </h2>
      <p
        className={
          theme === "cherry"
            ? `${styles.text} ${styles.service__text_cherry}`
            : `${styles.text} ${styles.service__text_orange}`
        }
      >
        {text}
      </p>
    </div>
  );
};

Service.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.string,
};
export default Service;
