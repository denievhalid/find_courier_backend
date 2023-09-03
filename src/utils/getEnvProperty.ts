import dotenv from "dotenv";

dotenv.config();

export default function getEnvProperty(key: string): string {
  return process.env[key.toUpperCase()] || "";
}
