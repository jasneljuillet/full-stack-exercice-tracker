import dotenv from "dotenv";

dotenv.config();
const dbUri = process.env.DB;
export default dbUri;
