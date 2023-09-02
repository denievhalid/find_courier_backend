import crypto from "crypto";

export default function generateHash(bytesSize: number = 32) {
  return crypto.randomBytes(bytesSize).toString("hex");
}
