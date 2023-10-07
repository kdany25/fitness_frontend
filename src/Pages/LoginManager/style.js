import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const JoinLink = styled(LinkR)`
	border-radius: 50px;
	background: #202020;
	white-space: nowrap;
	padding: 10px 22px;
	color: #ffffff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 100px;
	text-align: center;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;

export const LoginBtn = styled.div`
	border-radius: 50px;
	background: #202020;
	white-space: nowrap;
	padding: 25px 22px;
	color: #ffffff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 200px;
	text-align: center;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;
export const Faeye = {
	position: "absolute",
	top: "50%",
	right: "25%",
	transform: "translateY(-50%)",
	cursor: "pointer",
};
