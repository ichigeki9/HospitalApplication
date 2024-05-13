import styles from "./InputCheckbox.module.css";
import { CheckProcedureList } from "../../contexts/CheckProcedureListContext";
import { useContext } from "react";
import { ProcedureListContext } from "../../contexts/ProcedureListContext";

export function InputCheckbox({ name, checkVal, proc }) {
	const [checkProcList, setCheckProcList] = useContext(CheckProcedureList);
	const [procedureState, setProcedureState] = useContext(ProcedureListContext);

	function changeCheckProcList(name) {
		function isName(proc) {
			return proc.name === name;
		}

		setProcedureState((prevState) => {
			const index = prevState.find(isName);

			index.isCheck = !checkVal;
			return [...prevState];
		});

		if (checkVal === false) {
			setCheckProcList([...checkProcList, proc]);
		} else {
			const newList = checkProcList.filter((aa) => aa !== proc);
			setCheckProcList(newList);
		}
	}

	// console.log(data);

	return (
		<div className={styles.inputBox}>
			<input
				type="checkbox"
				id={name}
				checked={checkVal}
				className={styles.aaa}
				onChange={() => changeCheckProcList(name)}
			/>
			<label htmlFor={name}>{name}</label>
		</div>
	);
}
