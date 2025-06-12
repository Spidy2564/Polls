import { io } from "socket.io-client";

const socket = io("https://polls-backend-o0c5.onrender.com"); // Update for prod if hosted

export default socket;
