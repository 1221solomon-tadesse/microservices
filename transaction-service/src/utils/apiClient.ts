import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const userService = axios.create({ baseURL: process.env.USER_SERVICE_URL });
const bankService = axios.create({ baseURL: process.env.BANK_SERVICE_URL });

export { userService, bankService };
