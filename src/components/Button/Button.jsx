import styles from "./Button.module.css"

export function Button (props) {
    return(
        <div className={styles.btnBox}>
            <button className={styles.btn} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}