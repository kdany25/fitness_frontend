import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: #007CFF;
	white-space: nowrap;
	padding: 10px 22px;
	color: #ededed;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-left: 24px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;