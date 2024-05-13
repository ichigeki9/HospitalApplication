import styles from "./ModuleButton.module.css"
import {motion} from 'framer-motion' 

export function ModuleButton(props) {
    return(
        <div className={styles.moduleButtonBox}>
            <motion.button whileHover={{scale: 1.1}} className={styles.moduleButton} onClick={props.onClick}>{props.title}</motion.button>
        </div>
    )
}