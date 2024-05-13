import { useState } from "react";
import { TransportListContainer } from "../TransportListContainer/TransportListContainer";
import { TransportListFilterBox } from "../TransportListFilterBox/TransportListFilterBox";
import { TransportListItem } from "../TransportListItem/TransportListItem";


export function TransportList(props) {
	


	const transportList = props.transportData.sort((a,b) =>{
		if (a.time < b.time) {
		  return -1;
		}
		if (a.time > b.time) {
		  return 1;
		}}).filter((item) => item.date === props.selectedDate ).map((item, index) => {
        

        return(
		
			<TransportListItem key={item.id} date={item.date} time={item.time} transportFrom={item.transportFrom} transportTo={item.transportTo} transportTime={item.transportTime} comments={item.comments} active={item.active} id={item.id} setTransportData={props.setTransportData} index={index} />
		)
	});

	return (
		<TransportListContainer>
			<TransportListFilterBox />
            <ul>
            {transportList}
            </ul>
		</TransportListContainer>
	);
}
