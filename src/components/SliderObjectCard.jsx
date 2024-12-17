import styles from "./SliderObject.module.css";
import HeartButton from "./HeartButton";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SliderObjectTable({
  Title,
  shirts,
  price,
  AddToCart,
  ...props
}) {
  return (
    <div className={styles.slider} {...props}>
      <div className={styles.sliderunder}>
        <div className={styles.sliderNav}>
          <HeartButton className={styles.sliderbutton} />

          <button className={styles.secondbutton} onClick={AddToCart}>
            Add to Cart
          </button>
        </div>

        <div className={styles.img}>
          <LazyLoadImage  src={shirts} alt={Title} />
         
         
        </div>
      </div>
      <div className={styles.whitecolor}>
        <p className={styles.lastpart}>
          <span>{Title}</span>
          <span>
            {price}
            <sup>₹</sup>
          </span>
        </p>
        <p className={`${styles.lastpart} ${styles.lastpart2}`}>
          <span>/Pièce</span>
          <span className={styles.lastpart2span}>20 pièces Left</span>
        </p>
      </div>
    </div>
  );
}
