import "./App.css";
import Authenitcate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";

export default function App() {
	const [token, setToken] = useState(null);

	return (
		<>
			<SignUpForm
				token={token}
				setToken={setToken}
			/>
			<Authenitcate
				token={token}
				setToken={setToken}
			/>
		</>
	);
}
