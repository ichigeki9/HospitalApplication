import styles from "./CloseButton.module.css"

export function CloseButton(props) {
    return (
        <div className={styles.closeButtonBox}>
            <button onClick={props.closeModal}>X</button>
        </div>
    )
}