import axios from "axios";

// Use this for local testing
export default axios.create({ baseURL: "http://localhost:3000" });

// export default axios.create({ baseURL: "https://capstone.tristanviernes.com" });

// Deployed database server
// export default axios.create({
//   baseURL: "https://capstone-server.cyclic.app",
// });
