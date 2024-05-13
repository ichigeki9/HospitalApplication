import styles from "./CurrentDate.module.css";

export function CurrentDate(props) {
	
	return (
		<div className={styles.dateContainer}>
		   <p> {props.currentData()}</p>
		</div>
	);
}
