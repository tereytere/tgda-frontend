import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {
	LoginContainer,
	LoginBox,
	LoginHeader,
	LoginButtonContainer,
	SubmitButton
} from "../styledComponents/LoginStyles";

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await fetch('http://localhost:8000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error('Error en Login');
			}

			const data = await response.json();

			const token = data.token;

			// Store the token in localStorage
			localStorage.setItem("token", token);
			localStorage.setItem("token_type", data.token_type);

			// Redirect the user after successful login
			navigate('/');

			// Reset form fields
			setEmail('');
			setPassword('');

			if (formRef.current) {
				formRef.current.reset();
			}
		} catch (error) {
			console.error('Error en Login', error);
		}
	};


	return (
		<div className='content'>
			<LoginContainer>
				<LoginBox>
					<LoginHeader>Login</LoginHeader>
					<div className="flex">
						<div className="component login">
							<Form ref={formRef} onSubmit={handleLogin}>
								<Form.Group className="mb-3">
									<Form.Control
										type="email"
										className="email input"
										placeholder='Escribe tu Email'
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Control
										type="password"
										className="text input"
										placeholder='Escribe tu Contraseña'
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</Form.Group>
								<LoginButtonContainer>
									<SubmitButton type="submit">Login</SubmitButton>
								</LoginButtonContainer>
							</Form>
						</div>
					</div>
				</LoginBox>
			</LoginContainer>{" "}
		</div>
	);
}

export default Login;
