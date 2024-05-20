import styles from "./Testimonial.module.scss";
import PropTypes from "prop-types";

const Testimonial = (props) => {
  const { img, text, name, position } = props;
  return (
    <div className={styles.testimonial}>
      <img src={img} alt="client image" className={styles.testimonial__image} />
      <p className={styles.testimonial__text}>{text}</p>
      <p className={styles.testimonial__name}>{name}</p>
      <p className={styles.testimonial__position}>{position}</p>
    </div>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default Testimonial;
