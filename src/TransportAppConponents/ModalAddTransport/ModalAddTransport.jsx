import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import styles from "./ModalAddTransport.module.css";
// import { Form } from "react-router-dom";
import {motion} from 'framer-motion'


export function sendTransportToDatabase(args) {
	return fetch("https://transpandprocapp-default-rtdb.firebaseio.com/transporty.json", {
		method: "PUT",
		headers: {
			"Contetnt-type": "application/json"
		},
		body: JSON.stringify (args)
	})}
export function ModalAddTransport(props) {
	const [dataOfTransport, setDataOfTransport] = useState({
		id: props.transportData.length + 1,
		date: props.selectedDate,
		time: "",
		transportFrom: "",
		transportTo: "",
		transportTime: "",
		comments: "",
		active: false,
	});
	console.log("dane z modala,", dataOfTransport);

	function addTransportItem() {
		props.setAddModalVisible(false);

		props.setTransportData((prevVal) => {
			return [...prevVal, dataOfTransport];
		});
		//  sendTransportToDatabase(props.transportData)
	}

	console.log(props.currentData());
	return (
		<Modal>
			
				{/* <div className={styles.modal}> */}
				<button
					className={styles.closeButton}
					onClick={() => props.setAddModalVisible(false)}>
					X
				</button>
				<div className={styles.title}>
					<h2>Dodaj Transport</h2>
				</div>
				<div className={styles.date}>
					<label className={styles.labelTransportData} htmlFor="date">Data:</label>

					<input className={styles.inputTransportData}
						
						type="date"
						id="date"
						min={props.currentData()}
						value={dataOfTransport.date}
						onChange={(e) => {
							setDataOfTransport((prevVal) => {
								return { ...prevVal, date: e.target.value };
							});
						}}
					/>
				</div>
				<div className={styles.date}>
					<label className={styles.labelTransportData} htmlFor="time">Godzina: </label>

					<input className={styles.inputTransportData}
						type="time"
						id="time"
						required
						onChange={(e) => {
							setDataOfTransport((prevVal) => {
								return { ...prevVal, time: e.target.value };
							});
						}}
					/>
				</div>
				<div className={styles.date}>
					<label className={styles.labelTransportData} htmlFor="from">Transport z:</label>

					<input className={styles.inputTransportData}
						type="text"
						id="from"
						required
						onChange={(e) => {
							setDataOfTransport((prevVal) => {
								return { ...prevVal, transportFrom: e.target.value };
							});
						}}
					/>
				</div>
				<div className={styles.date}>
					<label className={styles.labelTransportData} htmlFor="to">Transport do:</label>

					<input className={styles.inputTransportData}
						type="text"
						id="to"
						required
						onChange={(e) => {
							setDataOfTransport((prevVal) => {
								return { ...prevVal, transportTo: e.target.value };
							});
						}}
					/>
				</div>

				<div className={styles.date}>
					<label className={styles.labelTransportData} htmlFor="transportTime">Czas Transportu:</label>
					<input className={styles.inputTransportData}
						type="text"
						id="transportTime"
						required
						onChange={(e) => {
							setDataOfTransport((prevVal) => {
								return { ...prevVal, transportTime: e.target.value };
							});
						}}
					/>
				</div>
				<div className={styles.date}>
					<label className={styles.labelTransportData} htmlFor="comments">Uwagi:</label>
					<input className={styles.inputTransportData}
					name='id'
						type="text"
						id="comments"
						onChange={(e) => {
							setDataOfTransport((prevVal) => {
								return { ...prevVal, comments: e.target.value };
							});
						}}
					/>
				</div>
								{/* <Form method="POST" action="/transportApp"> */}

				<div className={styles.buttonBox}>
					<motion.button whileHover={{scale: 1.1}} >Wyczyść</motion.button>
					<motion.button whileHover={{scale: 1.1}} onClick={() => addTransportItem()}>Dodaj</motion.button>
				</div>
				{/* </div> */}
			{/* </Form> */}
		</Modal>
	);
}
