import { CheckProcedureList } from "../../contexts/CheckProcedureListContext";
import { useContext } from "react";

import styles from "./SelectedProceduresBox.module.css";

export function SelectedProceduresBox() {
	const [checkProcList, setCheckProcList] = useContext(CheckProcedureList);

	console.log(checkProcList);


	return (
		<>
			{checkProcList.length > 0 && (
				<div className={styles.selectedProceduresBox}>
					<p>{checkProcList.join(',')}</p>
				</div>
			)}
		</>
	);
}
