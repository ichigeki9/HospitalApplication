import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import styles from "./EditModal.module.css";
import {motion} from 'framer-motion' 

export function EditModal(props) {
	const transportItemToEdit = props.transportData.filter((item) => item.active);

	const [transportItem, setTransportItem] = useState(transportItemToEdit[0]);

	console.log(transportItem, "aaaaaaaaaaaa");

	function editTransport(transportItem) {
		props.setEditModalVisible(false);
		props.setTransportData((prevVal) => {
			const objIndex = props.transportData.findIndex(
				(obj) => obj.active == true
			);

			prevVal[objIndex] = {
				...prevVal[objIndex],
				date: transportItem.date,
				time: transportItem.time,
				transportFrom:transportItem.transportFrom,
				transportTo: transportItem.transportTo,
				transportTime: transportItem.transportTime,
				comments: transportItem.comments,
				
			};

			return [...prevVal];
		});
	}

	return (
		<Modal>
			<button
				className={styles.closeButton}
				onClick={() => props.setEditModalVisible(false)}>
				X
			</button>
			<div className={styles.title}>
				<h2>Edytuj Transport</h2>
			</div>
			<div className={styles.date}>
				<label className={styles.labelTransportData} htmlFor="date">Data:</label>

				<input className={styles.InputTransportData}
					type="date"
					id="date"
					value={transportItem.date}
					onChange={(e) =>
						setTransportItem((prevVal) => {
							return { ...prevVal, date: e.target.value };
						})
					}
				/>
			</div>
			<div className={styles.date}>
				<label className={styles.labelTransportData} htmlFor="time">Godzina: </label>

				<input className={styles.InputTransportData}
					type="time"
					id="time"
					required
					value={transportItem.time}
					onChange={(e) => {
						setTransportItem((prevVal) => {
							return { ...prevVal, time: e.target.value };
						});
					}}
				/>
			</div>
			<div className={styles.date}>
				<label className={styles.labelTransportData} htmlFor="from">Transport z:</label>

				<input className={styles.InputTransportData}
					type="text"
					id="from"
					required
					value={transportItem.transportFrom}
					onChange={(e) =>
						setTransportItem((prevVal) => {
							return { ...prevVal, transportFrom: e.target.value };
						})
					}
				/>
			</div>
			<div className={styles.date}>
				<label className={styles.labelTransportData} htmlFor="to">Transport do:</label>

				<input className={styles.InputTransportData}
					type="text"
					id="to"
					required
					value={transportItem.transportTo}
					onChange={(e) =>
						setTransportItem((prevVal) => {
							return { ...prevVal, transportTo: e.target.value };
						})
					}
				/>
			</div>

			<div className={styles.date}>
				<label className={styles.labelTransportData} htmlFor="transportTime">Czas Transportu:</label>
				<input className={styles.InputTransportData}
					type="text"
					id="transportTime"
					required
					value={transportItem.transportTime}
					onChange={(e) =>
						setTransportItem((prevVal) => {
							return { ...prevVal, transportTime: e.target.value };
						})
					}
				/>
			</div>
			<div className={styles.date}>
				<label className={styles.labelTransportData} htmlFor="comments">Uwagi:</label>
				<input className={styles.InputTransportData}
					type="text"
					id="comments"
					value={transportItem.comments}
					onChange={(e) =>
						setTransportItem((prevVal) => {
							return { ...prevVal, comments: e.target.value };
						})
					}
				/>
			</div>

			<div className={styles.buttonBox}>
				<motion.button whileHover={{scale: 1.1}}>Wyczyść</motion.button>
				<motion.button whileHover={{scale: 1.1}} onClick={() => editTransport(transportItem)}>Zmień</motion.button>
			</div>
			{/* </div> */}
		</Modal>
	);
}
