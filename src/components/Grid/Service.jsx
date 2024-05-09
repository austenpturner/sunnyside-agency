import styles from "./Service.module.scss";
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
      <h3
        className={
          theme === "cherry"
            ? `${styles.service__header} ${styles.service__header_cherry}`
            : `${styles.service__header} ${styles.service__header_orange}`
        }
      >
        {header}
      </h3>
      <p
        className={
          theme === "cherry"
            ? `${styles.service__text} ${styles.service__text_cherry}`
            : `${styles.service__text} ${styles.service__text_orange}`
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
