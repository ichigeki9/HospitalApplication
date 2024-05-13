
import { ProcedureBox } from "../ProcedureBox/ProcedureBox";
import { SelectedProceduresBox } from "../SelectedProceduresBox/SelectedProceduresBox";
import styles from "./ProcedureContainer.module.css";

export function ProcedureContainer({ procedures }) {
	const procCategoryList = [];

	

	const procCategory = procedures.map((obj) => {
		if (procCategoryList.includes(obj.category) == false) {
			procCategoryList.push(obj.category);
		}
	});

		console.log(procCategoryList);

	const procedureBoxes = procCategoryList.map((item) => {
		const procedureBoxMap = procedures.filter((obj) => obj.category === item);
		return (
			<li key={item}>
				<ProcedureBox proc={procedureBoxMap} />
			</li>
		)
	});

	return (
		<div className={styles.box}>
			<SelectedProceduresBox />
			{procedureBoxes}
		</div>
	)
}
