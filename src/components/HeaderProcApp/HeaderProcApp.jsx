import { CheckProcedureList } from "../../contexts/CheckProcedureListContext";
import { ProcedureListContext } from "../../contexts/ProcedureListContext";
import { ButtonProcedureApp } from "../ButtonProcedureApp/ButtonProcedureApp";
import { Modal } from "../Modal/Modal";
import { ModalHospitalizationProperties } from "../ModalHospitalizationProperties/ModalHospitalizationProperties";
import { ModalPatientData } from "../ModalPatientData/ModalPatientData";
import styles from "./HeaderProcApp.module.css";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";

export function HeaderProcApp(props) {
	const [checkProcList, setCheckProcList] = useContext(CheckProcedureList);
	const [procedureState, setProcedureState] = useContext(ProcedureListContext);
	const [modalPatientDataVisible, setPatientDataVisible] = useState(false);
	const [
		modalHospitalizationPropertiesVisible,
		setModalHospitalizationPropertiesVisible,
	] = useState(false);

	function closePatientDataModal() {
		setPatientDataVisible(false);
	}
	function closeModalHospitalizationProperties() {
		setModalHospitalizationPropertiesVisible(false);
		props.setSpecyficationVisible(true);
	}

	function openModalHospitalizationProperties() {
		setModalHospitalizationPropertiesVisible(true);
	}

	const [active, setActive] = useState(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(checkProcList);
		setActive(true);
	}

	function resetProcedureList() {
		setCheckProcList([]);
		setProcedureState((prevVal) => {
			const newTab = prevVal.map((obj) => {
				obj.isCheck = false;
				return { ...obj };
			});
			return newTab;
		});
	}

	return (
		<>
			<AnimatePresence>
				{modalPatientDataVisible && (
					<ModalPatientData
						closeModal={closePatientDataModal}
						openModalHospProp={openModalHospitalizationProperties}
						setPatientData={props.setPatientData}
					/>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{modalHospitalizationPropertiesVisible && (
					<ModalHospitalizationProperties
						closeModal={closeModalHospitalizationProperties}
						setSpecData={props.setSpecData}
					/>
				)}
			</AnimatePresence>

			<header className={styles.header}>
				<div className={styles.titleBox}>
					<h1 className={styles.title}>ProcedureApp</h1>
				</div>
				<div className={styles.buttonBox}>
					<ButtonProcedureApp
						title={"Kopiuj"}
						onClick={copyToClipboard}
						active={active}
					/>
					<ButtonProcedureApp title={"Resetuj"} onClick={resetProcedureList} />
					<ButtonProcedureApp
						title={"Generuj Specyfikacje"}
						onClick={() => setPatientDataVisible(true)}
					/>
				</div>
			</header>
		</>
	);
}
