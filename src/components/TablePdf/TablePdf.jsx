import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Font,
} from "@react-pdf/renderer";
import Roboto from "../../Fonts/Roboto-Regular.ttf";
// Create styles
Font.register({ family: "Roboto", src: Roboto });

const styles = StyleSheet.create({
	page: {
		backgroundColor: "white",
		textAlign: "center",
		width: '100%'
	},
	section: {
		marginTop: 50,
		marginHorizontal: 90,
		padding: 10,
		fontSize: 20,
	},
	patientDataBox: {
		marginTop: 80,
		//   border: 1,
		marginHorizontal: 120,
	},
	patientData: {
		marginTop: 10,
		textAlign: "start",
		fontFamily: "Roboto",
		fontSize: 15,
	},
	table: {
		width: "450px",
		height: "31px",
		flex: "true",
		flexDirection: "row",
		marginTop: 30,
		marginHorizontal: 70,
		// marginLeft: 80,
		textAlign: "center",
		fontFamily: "Roboto",
	},
	tableText: {
		alignContent: "center",
		justifyContent: "center",
		// flex: "true",
		border: 1,
		paddingTop: "5px",
		width: "100%",
		height: "31px",
		fontSize: "10px",
		fontFamily: "Roboto",
	},
});

// Create Document Component
export const TablePdf = (props) => (
	<Document title={"Specyfikacja"}>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>
					Specyfikacja kosztów do faktury/paragonu za swiadczenia udzielane w
					SOR
				</Text>
			</View>
			<View style={styles.patientDataBox}>
				<Text style={styles.patientData}>
					Imie i nazwisko: {props.patientData.name}
				</Text>
				<Text style={styles.patientData}>Adres: {props.patientData.adres}</Text>
				<Text style={styles.patientData}>Pesel: {props.patientData.pesel}</Text>
				<Text style={styles.patientData}>
					Telefon: {props.patientData.telNum}
				</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Nazwa uslugi</Text>
				<Text style={styles.tableText}>Koszt</Text>
				<Text style={styles.tableText}>Opis swiadczenia</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Porada</Text>
				<Text style={styles.tableText}>
					{props.specData.pricePor.length > 0 &&
						props.specData.pricePor.concat("zł")}
				</Text>
				<Text style={styles.tableText}>{props.specData.por}</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Konsultacja Spejalistyczna</Text>
				<Text style={styles.tableText}>
					{props.specData.priceKonsSpec.length > 0 &&
						props.specData.priceKonsSpec.concat("zł")}
				</Text>
				<Text style={styles.tableText}>{props.specData.konsSpec}</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Diagnostyka Labolatoryjna</Text>
				<Text style={styles.tableText}>
					{props.specyficationData.labolatoryPrice.length > 0 &&
						props.specyficationData.labolatoryPrice
							.join("zł +")
							.toString()
							.concat("zł")}
				</Text>
				<Text style={styles.tableText}>
					{props.specyficationData.labolatoryName}
				</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Diagnostyka Obrazowa</Text>
				<Text style={styles.tableText}>
					{props.specyficationData.diagnosticImagingPrice.length > 0 &&
						props.specyficationData.diagnosticImagingPrice
							.join("zł +")
							.toString()
							.concat("zł")}
				</Text>
				<Text style={styles.tableText}>
					{props.specyficationData.diagnosticImagingName}
				</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Inna Diagnostyka</Text>
				<Text style={styles.tableText}></Text>
				<Text style={styles.tableText}></Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Transport</Text>
				<Text style={styles.tableText}>{`(${props.specData.priceTypeOfTransport}zł * ${props.specData.timeOfTransport}H) + ${props.specData.distanceOfTransport}km * 5zł`}</Text>
				<Text style={styles.tableText}>{props.specData.typeOftTransport}</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Inne Świadczenia/Pobyt w SOR</Text>
				<Text style={styles.tableText}>
					{props.specData.priceTime.length > 0 &&
						props.specData.priceTime.concat("zł")}
				</Text>
				<Text style={styles.tableText}>{props.specData.time}</Text>
			</View>
			<View style={styles.table}>
				<Text style={styles.tableText}>Razem</Text>
				<Text style={styles.tableText}>{props.totalPrice}</Text>
				<Text style={styles.tableText}></Text>
			</View>

			{/* <Text>Koszt</Text>
				<Text>Opis swiadczenia</Text> */}
		</Page>
	</Document>
);
//<Text style={styles.tableText}>{`(${props.specData.priceTypeOfTransport}zł * ${props.specData.timeOfTransport}H) + ${props.specData.distanceOfTransport}km * 5zł`}</Text>