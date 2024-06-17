import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BodyContentContainer } from "../styledComponents/ContentStyles";
import {
	LoginContainer,
	LoginBox,
	LoginHeader,
	Inputs,
	InputsBar,
	SubmitButton,
} from "../styledComponents/LoginStyles";

const Login: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:8000/login",
				{
					username,
					password,
				},
				{ withCredentials: true }
			);

			console.log(response.data);
			navigate("/");
		} catch (error) {
			console.error("Error logging in", error);
		}
	};

	return (
		<BodyContentContainer>
			<LoginContainer>
				<LoginBox>
					<LoginHeader>Login</LoginHeader>
					<form onSubmit={handleSubmit}>
						<Inputs>
							<InputsBar
								placeholder="Enter your username"
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<InputsBar
								placeholder="Enter your password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Inputs>
						<SubmitButton type="submit">Login</SubmitButton>
					</form>
				</LoginBox>
			</LoginContainer>{" "}
		</BodyContentContainer>
	);
};

export default Login;
