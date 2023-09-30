import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaCar } from "react-icons/fa";

export const SideBarContainer = styled.div`
	background-color: #ffffff;
	height: 100vh;
	padding: 5px 8px;
	position: relative;
	border: 1px solid #e3e8e5;
`;

export const MenuHolder = styled.div`
	padding: 5px;
	margin-top: 5%;
`;

export const MenuList = styled.ul`
	list-style-type: none;
	padding: 0;
  border-radius: 10px;
`;

export const HrefLinks = styled.a`
	display: flex;
	alignitems: center;
	color: #8a8998;
	text-decoration: none;
	font-weight: bold;
`;

export const linkItems = {
	padding: "20px",
	borderRadius: "20px",
	fontSize: "14px",
};

export const Logo = styled(LinkR)`
	color: #8a8998;
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	margin-top: 5%;
`;

export const LogIcon = styled(FaCar)`
	margin-right: 0.5rem;
	color: #9f76fc;
`;
export const HorizontalLine = styled.div`
	border-left: 1px solid black;
	border-right: 1px solid black;
	margin: 0 10px;
`;

export const images = [
	"https://i.ibb.co/thjQpxb/doc1-Photo-Room.png",
	"https://i.ibb.co/74x25LY/doc2-Photo-Room.png",
	"https://i.ibb.co/882fXFY/doc4.jpg",
	"https://i.ibb.co/qRNwqyS/doc5-Photo-Room.png",
	"https://i.ibb.co/8cGGxdW/doc8-Photo-Room-png-Photo-Room.png",
	"https://i.ibb.co/bRF6PYN/doc8.jpg",
	"https://i.ibb.co/54c7Lf6/doc.png",
];
