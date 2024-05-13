import { CloseButton } from "../CloseButton/CloseButton";
import { Modal } from "../Modal/Modal";
import { ModalInputText } from "../ModalInputText/ModalInputText";
import { ModuleButton } from "../ModuleButton/ModuleButton";
import styles from "./ModalPatientData.module.css";

export function ModalPatientData(props) {
	function close() {
		props.closeModal();
		props.openModalHospProp();
	}
	

	return (
		<Modal>
			<CloseButton closeModal={props.closeModal} />
			<div className={styles.title}>Dane Pacjenta</div>
			<ModalInputText
				title={"Imię i nazwisko"}
				setPatientData={(value) => {
					props.setPatientData((prevVal) => {
						return { ...prevVal, name: value };
					});
				}}
			/>
			<ModalInputText
				title={"Pesel"}
				setPatientData={(value) => {
					props.setPatientData((prevVal) => {
						return { ...prevVal, pesel: value };
					});
				}}
			/>
			<ModalInputText
				title={"Adres"}
				setPatientData={(value) => {
					props.setPatientData((prevVal) => {
						return { ...prevVal, adres: value };
					});
				}}
			/>
			<ModalInputText
				title={"Nr Tel"}
				setPatientData={(value) => {
					props.setPatientData((prevVal) => {
						return { ...prevVal, telNum: value };
					});
				}}
			/>
			<div className={styles.buttonBox}>
				<ModuleButton title={"Wyczyść"} />
				<ModuleButton title={"Dalej"} onClick={close} />
			</div>
		</Modal>
	);
}
