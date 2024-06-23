import styled from "styled-components";

export const HelpContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
`;

export const LeftSection = styled.div`
	flex: 1;
	width: 50%;
`;

export const RightSection = styled.div`
	flex: 1;
	width: 50%;
	margin-left: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const FormContainer = styled.form`
	margin-top: 20px;
	width: 100%;
`;

export const FormGroup = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 8px;
	font-size: 14px;
	font-weight: bold;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid black;
	font-size: 14px;
	box-sizing: border-box;
`;

export const Select = styled.select`
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid black;
	font-size: 14px;
	box-sizing: border-box;
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid black;
	font-size: 14px;
	box-sizing: border-box;
`;

export const Button = styled.button`
	padding: 10px 20px;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
  background-color: var(--nav-background-color);
	color: var(--main-background-color);
	border: 1px solid var(--border-color);
	border-radius: 5px;

	&:hover {
		background-color: var(--border-color);
	}
`;

export const StyledH4 = styled.h4`
	margin: 0;
	padding-bottom: 10px;
	font-weight: bold;
	width: 100%;
	box-sizing: border-box;
`;
