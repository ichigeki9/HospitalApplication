import styles from "./Modal.module.css";
import {motion} from 'framer-motion'

export function Modal({children}) {
	return (
		<div className={styles.layoutModal}>
			<motion.dialog 
			initial={{opacity:0 , y: 40}}
			animate={{opacity:1 , y: 0 }}
			exit={{opacity:0 , y: 40}}
			className={styles.modal}>
                {children}
            </motion.dialog>
		// </div>
	);
}
