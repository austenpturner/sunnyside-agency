import Testimonial from "./Testimonial";
import styles from "./Testimonials.module.scss";
import client1 from "../../assets/images/image-emily.jpg";
import client2 from "../../assets/images/image-thomas.jpg";
import client3 from "../../assets/images/image-jennie.jpg";

const testimonials = [
  {
    testimonial:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
    img: client1,
  },
  {
    testimonial:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Chief Operating Officer",
    img: client2,
  },
  {
    testimonial:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    position: "Business Owner",
    img: client3,
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h4 className={styles.testimonials__header}>Client Testimonials</h4>
      {testimonials.map((item) => {
        const { id, img, testimonial, name, position } = item;
        return (
          <Testimonial
            key={id}
            img={img}
            text={testimonial}
            name={name}
            position={position}
          />
        );
      })}
    </div>
  );
};

export default Testimonials;
