import { io } from "socket.io-client";

const socket = io("https://polls-backend-five.vercel.app"); // Update for prod if hosted

export default socket;
