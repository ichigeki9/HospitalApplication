import { HeaderProcApp } from "../components/HeaderProcApp/HeaderProcApp";
import { ProcedureContainer } from "../components/ProcedureContainer/ProcedureContainer";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { CheckProcedureList } from "../contexts/CheckProcedureListContext";
import { ProcedureListContext } from "../contexts/ProcedureListContext";
import { Specyfication } from "../components/Specyfication/Specyfication";

export function ProcedureApp() {
	const procedures = useLoaderData();

	const [checkProcList, setCheckProcList] = useState([]);
	const [procedureState, setProcedureState] = useState(procedures);
	const [specyficationVisible, setSpecyficationVisible] = useState(true);


	const labolatoryProcNameCheck = procedureState
		.filter((proc) => proc.category === "badaniaLab" && proc.isCheck === true)
		.map((proc) => {
			return  proc.name	
		}).join(', ')

		// const labolatoryListSpecyfication = labolatoryProcNameCheck
		// console.log(labolatoryListSpecyfication);
	

	const labolatoryProcPriceCheck = procedureState
		.filter((proc) => proc.category === "badaniaLab" && proc.isCheck === true)
		.map((proc) => {
			return  proc.price	
		});

		const labolatoryPriceInfo = labolatoryProcPriceCheck.map((item) => {
			item = `+ ${item} `
			return item
		}).toString().slice(1)


	// console.log(labolatoryPriceInfo);
	// console.log(labolatoryProcNameCheck);
	// console.log(labolatoryProcPriceCheck);

	// const zzz = procedureState.map((proced) => {

	// })

	const diagObraProcNameCheck = procedureState.filter(
		(proc) =>
			(proc.category === "rtg" ||
				proc.category === "tk" ||
				proc.category === "tkkon" ||
				proc.category === "usg") &&
			proc.isCheck === true
	).map((proc) => {
		return  proc.name	
	}).join(', ');

	const diagObraProcPriceCheck = procedureState.filter(
		(proc) =>
			(proc.category === "rtg" ||
				proc.category === "tk" ||
				proc.category === "tkkon" ||
				proc.category === "usg") &&
			proc.isCheck === true
	).map((proc) => {
		return  proc.price	
	});

	

	const specyficationData = {
		labolatoryName: labolatoryProcNameCheck,
		labolatoryPrice: labolatoryProcPriceCheck,
	
		diagnosticImagingName: diagObraProcNameCheck,
		diagnosticImagingPrice: diagObraProcPriceCheck,
		
	} 


	const [patientData, setPatientData] = useState({
		name: "",
		pesel: "",
		adres: "",
		telNum: "",
	});

	const [specData, setSpecData] = useState({
		time: "",
		priceTime: "",
		por: "",
		pricePor: "",
		konsSpec: "",
		priceKonsSpec: "",
		typeOftTransport:"",
		priceTypeOfTransport:"",
		timeOfTransport:"",
		distanceOfTransport: "",
		transportWithDoctor: false
	});
	console.log(specData);

	return (
		<CheckProcedureList.Provider value={[checkProcList, setCheckProcList]}>
			<ProcedureListContext.Provider
				value={[procedureState, setProcedureState]}>
				<HeaderProcApp
					setSpecyficationVisible={setSpecyficationVisible}
					setPatientData={setPatientData}
					setSpecData={setSpecData}
				/>
				<ProcedureContainer procedures={procedureState} />
				{specyficationVisible && (
					<Specyfication
						patientData={patientData}
						specData={specData}
						specyficationData={specyficationData}
					/>
				)}
			</ProcedureListContext.Provider>
		</CheckProcedureList.Provider>
	);
}
