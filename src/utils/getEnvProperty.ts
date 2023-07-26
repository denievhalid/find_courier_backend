import dotenv from "dotenv";

dotenv.config();

export default function getEnvProperty(key: string): string | null {
  return process.env[key.toUpperCase()] || null;
}
