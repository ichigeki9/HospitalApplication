import styles from "./TransportListItem.module.css";
import INFO from "../../assets/info.svg";
import { useState } from "react";

export function TransportListItem({
	date,
	time,
	transportFrom,
	transportTo,
	transportTime,
	comments,
	active,
	id,
	setTransportData,
	index
}) {

	const [popupActive , setPopupActive] = useState(false)

	return (
		<li
			// id={id}
			className={styles.filterBox}
			onClick={(e) => {
				console.log(e.target.parentElement);
				setTransportData((prevVal) => {
					const mapArray = prevVal.map((item) => {
						if (item.id === id) {
							return { ...item, active: true };
						} else {
							return { ...item, active: false };
						}
					});

					return mapArray;
				});
			}}
			style={{ backgroundColor: active && "#458fff" }}>
			<div className={styles.lp}>
				<p>{index +1 }.</p>
			</div>
			<div>
				<p>{date}</p>
			</div>
			<div>
				<p>{time}</p>
			</div>
			<div>
				<p>{transportFrom}</p>
			</div>
			<div>
				<p>{transportTo}</p>
			</div>
			<div>
				<p>{transportTime}</p>
			</div>
			<div className={styles.comment}>{comments.length > 0 &&  <img onMouseLeave={() => setPopupActive(false)} onMouseEnter={() => setPopupActive(true)} src={INFO} /> } {popupActive && <span className={styles.popup}><p>{comments}</p></span>} </div>
		</li>
	);
}

