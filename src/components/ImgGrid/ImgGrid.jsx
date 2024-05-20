import styles from "./ImgGrid.module.scss";
import coneImgMobile from "../../assets/images/mobile/image-gallery-cone.jpg";
import milkImgMobile from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import orangeImgMobile from "../../assets/images/mobile/image-gallery-orange.jpg";
import sugarImgMobile from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import coneImgDesktop from "../../assets/images/desktop/image-gallery-cone.jpg";
import milkImgDesktop from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeImgDesktop from "../../assets/images/desktop/image-gallery-orange.jpg";
import sugarImgDesktop from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";

const ImgGrid = () => {
  return (
    <div className={styles.imgGrid}>
      <div className={styles.imgGrid__mobile}>
        <img src={milkImgMobile} alt="milk bottle image" />
        <img src={orangeImgMobile} alt="orange image" />
        <img src={coneImgMobile} alt="ice cream cone image" />
        <img src={sugarImgMobile} alt="sugar cube image" />
      </div>
      <div className={styles.imgGrid__desktop}>
        <img src={milkImgDesktop} alt="milk bottle image" />
        <img src={orangeImgDesktop} alt="orange image" />
        <img src={coneImgDesktop} alt="ice cream cone image" />
        <img src={sugarImgDesktop} alt="sugar cube image" />
      </div>
    </div>
  );
};
export default ImgGrid;
