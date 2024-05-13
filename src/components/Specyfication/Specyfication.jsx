import { TablePdf } from "../TablePdf/TablePdf";
import { PDFViewer } from "@react-pdf/renderer";
import styles from "./Specyfication.module.css";
import { CheckProcedureList } from "../../contexts/CheckProcedureListContext";
import { useContext } from "react";

export function Specyfication(props) {
	// const [checkProcList] = useContext(CheckProcedureList);

	const transport = 0;

	function totalPrice() {
		const initialValue = 0;

		const totalDiag = props.specyficationData.diagnosticImagingPrice.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);

		const totalLabo = props.specyficationData.labolatoryPrice.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		);
		let totalTransport = (Number(props.specData.priceTypeOfTransport) * Number(props.specData.timeOfTransport)) + (Number(props.specData.distanceOfTransport) * 5) 

		
		
		if (props.specData.transportWithDoctor == true){
			totalTransport += (150  * props.specData.timeOfTransport)
			
			
		} 
		
		

		const totalOther =[
			Number(props.specData.priceTime) ,
			Number(props.specData.pricePor ),
			Number(props.specData.priceKonsSpec)].reduce(
				(accumulator, currentValue) => accumulator + currentValue,
				initialValue)

		const totalPrice = totalDiag + totalLabo + totalOther + totalTransport
				console.log(totalPrice);
		return `${totalPrice}zł`
	}
	totalPrice();

	return (
		<div className={styles.specContainer}>
			<h2>Specyfikacja</h2>
			<div className={styles.box}>
				<PDFViewer width={"1000px"} height={"1000px"}>
					<TablePdf
						patientData={props.patientData}
						specData={props.specData}
						specyficationData={props.specyficationData}
						totalPrice={totalPrice()}
					/>
				</PDFViewer>
			</div>
		</div>
	);
}
