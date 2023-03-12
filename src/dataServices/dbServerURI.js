import axios from "axios";

// Use this for local testing
export default axios.create({ baseURL: "http://localhost:3000" });

// Deployed database server
// export default axios.create({  baseURL: "https://capstone-server.cyclic.app" });
