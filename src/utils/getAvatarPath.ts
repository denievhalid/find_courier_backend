import getEnvProperty from "./getEnvProperty";
import { ENV } from "../constants";

export default function getAvatarPath(path: string) {
  return `${getEnvProperty(ENV.HOST)}${path}`;
}
