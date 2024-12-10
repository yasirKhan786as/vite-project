import styles from "./SliderObject.module.css"
import SliderObjectTable from "./SliderObjectTable"

export default function SliderObject({title, desc,children, ...props},) {
    return(
        <div className={styles.sliderobject} >
            <div className={styles.sliderobjectdiv}>
            <span>{title}</span><span>{desc}</span>
            </div>
            <div {...props}>
            
            {children}
            
            
            </div>
        </div>
    )
}