import { ButtonProcedureApp } from "../../components/ButtonProcedureApp/ButtonProcedureApp";
import { ButtonBox } from "../ButtonBox/ButtonBox";
import { TransportList } from "../TransportList/TransportList";
import { TransportListContainer } from "../TransportListContainer/TransportListContainer";
import { TransportListFilterBox } from "../TransportListFilterBox/TransportListFilterBox";
import styles from "./HeaderTransportApp.module.css";

export function HeaderTransportApp(props) {
	const transportItemIsActive = props.transportData.findIndex(
		(obj) => obj.active == true
	);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.title}>
					<h1>Transporty</h1>
				</div>
				<ButtonBox>
					<ButtonProcedureApp
						title={"Dodaj"}
						onClick={() => props.setAddModalVisible(true)}
					/>
					<ButtonProcedureApp
						disabled={transportItemIsActive == -1}
						title={"Usuń"}
						onClick={() => {
							const newTranspData = props.transportData.filter(
								(item) => item.active === false
							);
							props.setTransportData(newTranspData);
						}}
					/>
					<ButtonProcedureApp
						disabled={transportItemIsActive == -1}
						title={"Edytuj"}
						onClick={() => props.setEditModalVisible(true)}
					/>
				</ButtonBox>
			</header>
			<TransportList
				transportData={props.transportData}
				setTransportData={props.setTransportData}
				selectedDate={props.selectedDate}
			/>
		</div>
	);
}
