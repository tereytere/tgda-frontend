import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./components/AuthProvider";

// Define the type for the global window object
declare global {
	interface Window {
		csrfToken: string;
	}
}

const el = document.getElementById("root");
if (el === null) throw new Error("Root container missing in index.html");

const root = ReactDOM.createRoot(el);
root.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>
);

// Access the CSRF token from the global window object
const csrfToken = window.csrfToken;
console.log("CSRF Token:", csrfToken);
