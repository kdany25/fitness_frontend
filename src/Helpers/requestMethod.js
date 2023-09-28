import axios from "axios";

export const BASE_URL= "http://localhost:7001/api";


export const apiRequest = axios.create({
	baseURL: BASE_URL,
});