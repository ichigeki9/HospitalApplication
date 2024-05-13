
import { LeftBarLayout } from "../LeftBarLayout/LeftBarLayout";
import styles from "./LeftBar.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CurrentDate } from "../CurrentDate/CurrentDate";



export function LeftBar(props) {
	console.log(props.transportData);

	const activeTransportData = props.transportData
		.filter((item) => item.active === true)
		.map((item) => item);

	console.log(activeTransportData);

	return (
		<LeftBarLayout>
			<CurrentDate currentData={props.currentData} />
			<div className={styles.infoBox}>
				{activeTransportData.length < 1 ? (
					<div>
						<p>DANE TRANSPORTÓW</p>
					</div>
				) : (
					<>
						<div>
							<p>Data:</p>
							<p>{activeTransportData[0].date}</p>
						</div>
						<div>
							<p>Godzina:</p>
							<p>{activeTransportData[0].time}</p>
						</div>
						<div>
							<p>Transport z:</p>
							<p>{activeTransportData[0].transportFrom}</p>
						</div>
						<div>
							<p>Transport do:</p>
							<p>{activeTransportData[0].transportTo}</p>
						</div>
						<div>
							<p>Szacowany Czas:</p>
							<p>{activeTransportData[0].transportTime}</p>
						</div>
					</>
				)}
			</div>

			<div className={styles.calendarContainer}>
				<Calendar  onChange={(value) => {
					let day
					let month
					let year


					if (value.getDate() < 10) {
						day = `0${value.getDate()}`;
					} else {
						day = value.getDate();
					}
					if (value.getMonth() + 1 < 10) {
						month = `0${value.getMonth() + 1}`;
					} else {
						month = value.getMonth() + 1;
					}
					year = value.getFullYear();
				
		
					props.setSelectedDate(`${year}-${month}-${day}`)
					return 
				}} />
			</div>
		</LeftBarLayout>
	);
}


