import styles from "./SliderObject.module.css"
import HeartButton from "./HearButton"
import TableImg from "../assets/Table.png"
export default function SliderObjectTable({...props}) {
    return(
        <div className={styles.slider} {...props} >
        <div className={styles.sliderunder}>
            <div className={styles.sliderNav}>
            <HeartButton className={styles.sliderbutton}/>
            <button className={styles.secondbutton}>ART DE LA TABLE</button>
            </div>
            
            <div className={styles.img}>
                <img src={TableImg} alt="" />
        
        </div>
        </div>
            <div className={styles.whitecolor}>
          <p className={styles.lastpart}><span>Title</span><span>0<sup>€</sup></span></p>
          <p className={`${styles.lastpart} ${styles.lastpart2}`}><span>0,35€/Pièce · RÉF : VABGN5</span><span className={styles.lastpart2span}>20 pièces</span></p>
          </div>
       
          </div>

    )
}