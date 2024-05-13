import styles from "./InputText.module.css";

export function InputText(props) {
	console.log(props);

	return (
		<div className={styles.inputBox}>
			<label>
				<input type={props.type} placeholder={props.defVal} />
			</label>
		</div>
	);
}
