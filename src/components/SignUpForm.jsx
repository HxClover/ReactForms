import { useState } from "react";

export default function SignUpForm({ setToken }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await fetch(
				"https://fsa-jwt-practice.herokuapp.com/signup",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username,
						password,
					}),
				}
			);

			const res = await response.json();
			console.log(res);
			setToken(res.token);

			setUsername("");
			setPassword("");
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<>
			<h2>Sign Up Here:</h2>

			{error && <p>{error}</p>}

			<form onSubmit={handleSubmit}>
				<label>
					{" "}
					Username:{" "}
					<input
						value={username}
						onChange={(event) => {
							console.log(event.target.value);
							setUsername(event.target.value);
						}}
						id="user-name"
					/>
				</label>
				<label>
					Password:{" "}
					<input
						value={password}
						onChange={(e) => {
							console.log(e.target.value);
							setPassword(e.target.value);
						}}
						type="password"
						id="user-password"
					/>
				</label>
				<button>Submit</button>
			</form>
		</>
	);
}
