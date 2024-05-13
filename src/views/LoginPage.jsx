import { LoginLayout } from "../components/LoginLayout/LoginLayout";
import { LoginTitle } from "../components/LoginTitle/LoginTitle";
import { LoginBoxItem } from "../components/LoginBoxItem/LoginBoxItem";
import { useEffect, useState } from "react";

export function LoginPage() {
	// const [data, setData] = useState({transporty:[]})

	

	fetch(
		"https://transpandprocapp-default-rtdb.firebaseio.com/transporty.json"
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			
		});

	return (
		<LoginLayout>
			<LoginTitle />
			<LoginBoxItem />
		</LoginLayout>
	);
}
