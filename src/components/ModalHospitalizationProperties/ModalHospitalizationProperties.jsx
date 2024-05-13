import { useState } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { Modal } from "../Modal/Modal";
import { ModuleButton } from "../ModuleButton/ModuleButton";
import styles from "./ModalHospitalizationProperties.module.css";
import {motion} from 'framer-motion'

export function ModalHospitalizationProperties(props) {
	const [transportPropContainer, setTransportPropContainer] = useState(false);
	

	

	return (
		<Modal>
			<CloseButton closeModal={props.closeModal} />
			<div className={styles.title}>Dane do Specyfikacji </div>

			<div className={styles.inputBoxes}>
				<div className={styles.inputBox}>
					<label htmlFor="time">Czas pobytu pacjenta:{""}</label>
					<select
						name="time"
						defaultValue="null"
						onChange={(e) => {
							props.setSpecData((prevValue) => {
								if (e.target.value === "") {
									return { ...prevValue, priceTime: "", time: "" };
								} else {
									return {
										...prevValue,
										priceTime: e.target.value,
										time: e.target.selectedOptions[0].text,
									};
								}
							});
						}}
						// onChange={(e) => console.log(e.target.selectedOptions[0].text)}
					>
						<option value={""}>Wybierz</option>
						<option value={200}>Do godziny</option>
						<option value={400}>1-3 h</option>
						<option value={600}>3-6 h</option>
						<option value={800}>Powyżej 6 h</option>
					</select>
				</div>

				<div className={styles.inputBox}>
					<label htmlFor="porada">Porada:</label>
					<select
						id="porada"
						onChange={(e) => {
							props.setSpecData((prevValue) => {
								if (e.target.value === "") {
									return { ...prevValue, pricePor: "", por: "" };
								} else {
									return {
										...prevValue,
										pricePor: e.target.value,
										por: e.target.selectedOptions[0].text,
									};
								}
							});
						}}>
						<option value={""}>Wybierz</option>
						<option value="150">Ambulatoryjna</option>
						<option value="180">Zabiegowa</option>
						<option value="330">Porada Ambulatoryjna i Zabiegowa</option>
					</select>
				</div>

				<div className={styles.inputBox}>
					<label htmlFor="konsSpec">Konsultacja Specjalistyczna:</label>
					<select
						id="konsSpec"
						defaultValue="null"
						onChange={(e) => {
							props.setSpecData((prevValue) => {
								if (e.target.value === "") {
									return { ...prevValue, priceKonsSpec: "", konsSpec: "" };
								} else {
									return {
										...prevValue,
										priceKonsSpec: e.target.value,
										konsSpec: e.target.selectedOptions[0].text,
									};
								}
							});
						}}>
						<option value={""}>Brak</option>
						<option value="200">Internistyczna</option>
						<option value="200">Ortopedyczna</option>
						<option value="200">Chirurgiczna</option>
						<option value="200">Neurochirurgiczna</option>
					</select>
				</div>

				<div className={styles.checkboxBox}>
					<div className={styles.chechboxTransport}>
						<label htmlFor="transport">Transport</label>
						<input
							type="checkbox"
							id="transport"
							name="transport"
							onChange={() => {
								setTransportPropContainer(!transportPropContainer);
							}}
						/>
					</div>

					<div className={styles.chechboxDate}>
						<label htmlFor="dataCheck">Dodaj dzisiejszą date</label>
						<input type="checkbox" id="dataCheck" name="dataCheck" />
					</div>
				</div>

				<motion.div  style={{ display: transportPropContainer ? "block" : "none" } }>
					<div className={styles.inputBox}>
						<label htmlFor="typeTransport">Rodzaj Transportu:</label>
						<select
							id="typeTransport"
							onChange={(e) => {
								props.setSpecData((prevValue) => {
									if (e.target.value === "") {
										return {
											...prevValue,
											priceTypeOfTransport: "",
											typeOftTransport: "",
										};
									} else {
										return {
											...prevValue,
											priceTypeOfTransport: e.target.value,
											typeOftTransport: e.target.selectedOptions[0].text,
										};
									}
								});
							}}>
							<option value={""}>Brak</option>
							<option value="120">
								Kierowca + Ratownik w godz. 7:00 - 22:00
							</option>
							<option value="150">
								Kierowca + Ratownik w godz. 22:00 - 7:00
							</option>
							<option value="150">
								Kierowca + Ratownik w dni ustawowo wolne
							</option>
						</select>
					</div>

					<div className={styles.transportProp}>
						<div className={styles.inputTranspPropBox}>
							<label htmlFor="transpTime">Czas transportu:</label>
							<input
								className={styles.input}
								type="number"
								id="transpTime"
								onChange={(e) => {
									props.setSpecData((prevValue) => {
										return {
											...prevValue,
											timeOfTransport: e.target.value,
										};
									});
								}}
							/>
						</div>
						<div className={styles.inputTranspPropBox}>
							<label htmlFor="transpDist">Dystans transportu:</label>
							<input
								className={styles.input}
								type="number"
								id="transpDist"
								onChange={(e) => {
									props.setSpecData((prevValue) => {
										return {
											...prevValue,
											distanceOfTransport: e.target.value,
										};
									});
								}}
							/>
						</div>
					</div>
					<div className={styles.checkboxContainerDoctor}>
						<div className={styles.chechboxDoctor}>
							<label className={styles.transpDoctorCheck} htmlFor="transpDoctorCheck">Transport z lekarzem</label>
							<input
								type="checkbox"
								id="transpDoctorCheck"
								name="transpDoctorCheck"
								onChange={(e) => {
									
									props.setSpecData((prevValue) => {
										return {
											...prevValue,
											transportWithDoctor: !prevValue.transportWithDoctor,
										};
									});
								}}
								
								/>
						</div>
					</div>
				</motion.div>
			</div>

			<div className={styles.buttonBox}>
				<ModuleButton title={"Wyczyść"} />
				<ModuleButton title={"Generuj"} onClick={props.closeModal} />
			</div>
		</Modal>
	);
}
