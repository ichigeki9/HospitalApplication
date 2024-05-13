import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/theme.css";
import "./styles/globals.css";
import { MenuApp } from "./views/MenuApp";
import { LoginPage } from "./views/LoginPage.jsx";
import { ProcedureApp } from "./views/ProcedureApp.jsx";
import { TransportApp } from "./views/TransportApp.jsx";
import { sendTransportToDatabase } from "./TransportAppConponents/ModalAddTransport/ModalAddTransport.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
		
	},
	{
		path: "/menu",
		element: <MenuApp />,
	},
	{
		path: "/proceApp",
		loader: () => {
			return fetch("./DUMMY_DATA.JSON");
		},
		element: <ProcedureApp />,
	},
	{
		path: "/transportApp",
		loader: () => {
			return fetch("./aaaa.json");
		},
		// action:sendTransportToDatabase,
		element: <TransportApp />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
