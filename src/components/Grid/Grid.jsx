import Feature from "./Feature";
import Service from "./Service";
import styles from "./Grid.module.scss";
import eggImg from "../../assets/images/mobile/image-transform.jpg";
import cupImg from "../../assets/images/mobile/image-stand-out.jpg";

const features = [
  {
    header: "Transform your brand",
    text: `We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.`,
    image: {
      src: eggImg,
      alt: "egg image",
    },
    theme: "yellow",
  },
  {
    header: "Stand out to the right audience",
    text: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.`,
    image: {
      src: cupImg,
      alt: "pink cup image",
    },
    theme: "pink",
  },
];

const services = [
  {
    header: "Graphic Design",
    text: `Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. `,
    theme: "cherry",
  },
  {
    header: "Photography",
    text: `Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`,
    theme: "orange",
  },
];

const Grid = () => {
  return (
    <div className={styles.grid}>
      {features.map((item) => {
        const { id, image, header, text, theme } = item;
        return (
          <div key={id} className={styles.grid__pair}>
            <img src={image.src} alt={image.alt} className={styles.grid__img} />
            <Feature header={header} text={text} theme={theme} />
          </div>
        );
      })}
      {services.map((service) => {
        const { id, header, text, theme } = service;
        return <Service key={id} header={header} text={text} theme={theme} />;
      })}
    </div>
  );
};
export default Grid;
