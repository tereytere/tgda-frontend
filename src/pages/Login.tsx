import React, { useState, useRef } from 'react';
import axios from 'axios';
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
			const response = await axios.post('http://localhost:8000/login', {
				email,
				password,
			});

			const { token, token_type } = response.data.data;

			localStorage.setItem('token', token);
			localStorage.setItem('token_type', token_type);

			navigate('/');

			setEmail('');
			setPassword('');

			if (formRef.current) {
				formRef.current.reset();
			}
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				console.error('Login error response:', error.response.data);
				console.error('Error in Login: ' + error.response.data.error);
			} else {
				console.error('Error in Login', error);
			}
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
