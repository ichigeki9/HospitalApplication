import { useEffect, useState } from "react";
import { HeaderTransportApp } from "../TransportAppConponents/HeaderTransportApp/HeaderTransportApp";
import { LeftBar } from "../TransportAppConponents/LeftBar/LeftBar";
import { TransportAppLayout } from "../TransportAppConponents/TransportAppLayout/TransportAppLayout";
import { ModalAddTransport } from "../TransportAppConponents/ModalAddTransport/ModalAddTransport";
import { EditModal } from "../TransportAppConponents/EditModal/EditModal";
import { useLoaderData } from "react-router-dom";
import { sendTransportToDatabase } from "../TransportAppConponents/ModalAddTransport/ModalAddTransport";

function currentData(day, month, year) {
	if (new Date().getDate() < 10) {
		day = `0${new Date().getDate()}`;
	} else {
		day = new Date().getDate();
	}
	if (new Date().getMonth() + 1 < 10) {
		month = `0${new Date().getMonth() + 1}`;
	} else {
		month = new Date().getMonth() + 1;
	}
	year = new Date().getFullYear();

	return `${year}-${month}-${day}`;
}

// {
// 	id: "",
// 	date: "",
// 	time: "",
// 	tranportFrom: "",
// 	transportTo: "",
// 	transportTime: "",
// 	comments: "",
// },

// console.log(dataTransport[0], 'dupa');

export function TransportApp() {
	// const transportList = useLoaderData()
	const transportList = []

	console.log(transportList);

	const [addModalVisible, setAddModalVisible] = useState(false);
	const [editModalVisible, setEditModalVisible] = useState(false);

	// const [transportData, setTransportData] = useState([]);
	const [transportData, setTransportData] = useState(transportList);

	const [selectedDate, setSelectedDate] = useState(currentData);

	console.log(transportData);

	sendTransportToDatabase(transportData)

	return (
		<TransportAppLayout>
			{addModalVisible && (
				<ModalAddTransport
					setAddModalVisible={setAddModalVisible}
					setTransportData={setTransportData}
					transportData={transportData}
					selectedDate={selectedDate}
					currentData={currentData}
				/>
			)}
			{editModalVisible && (
				<EditModal
					setEditModalVisible={setEditModalVisible}
					setTransportData={setTransportData}
					transportData={transportData}
				/>
			)}
			<LeftBar
				currentData={currentData}
				transportData={transportData}
				setSelectedDate={setSelectedDate}
			/>
			<HeaderTransportApp
				setAddModalVisible={setAddModalVisible}
				transportData={transportData}
				setTransportData={setTransportData}
				selectedDate={selectedDate}
				setEditModalVisible={setEditModalVisible}
			/>
		</TransportAppLayout>
	);
}


// [
// 	{
// 		id: 2,
// 		date: "2024-03-30",
// 		time: "10:10",
// 		transportFrom: "dom Ełk",
// 		transportTo: "Poradnia Chirurgiczna",
// 		transportTime: "2h",
// 		comments: "",
// 		active: false,
// 	},
// 	{
// 		id: 2,
// 		date: "2024-03-30",
// 		time: "13:00",
// 		transportFrom: "Ortopedia",
// 		transportTo: "Dom EŁK",
// 		transportTime: "30 min",
// 		comments: "",
// 		active: false,
// 	},
// 	{
// 		id: 3,
// 		date: "2024-03-30",
// 		time: "09:00",
// 		transportFrom: "wewnętrzny",
// 		transportTo: "Dom EŁK",
// 		transportTime: "30min",
// 		comments: "TLEN",
// 		active: false,
// 	},
// ]