import styles from "./ModalInputText.module.css"

export function ModalInputText(props) {
   return (
    <div className={styles.inputBox}>
        {props.title}  <input id="raz" className={styles.input} type="text" onChange={(e) => props.setPatientData(e.target.value)}/>
       <label className={styles.label} htmlFor="raz" />
    
    </div>

   )
}