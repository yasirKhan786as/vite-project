import styles from "./SliderObject.module.css"
import { forwardRef } from "react"

const SliderObject = forwardRef((props, ref) => {
    return(
        <div className={styles.sliderobject}  ref={ref} >
            <div className={styles.sliderobjectdiv}>
            <span>{props.title}</span><span>{props.desc}</span>
            </div>
            <div {...props}>
            
            {props.children}
            
            
            </div>
        </div>
    )
})
export default SliderObject;