import styles from "./ButtonBox.module.css";

export function ButtonBox({ children }) {
	return <div className={styles.buttonContainer}>{children}</div>;
}
