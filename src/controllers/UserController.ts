import type { Request, Response } from "express";
import UserService from "../services/UserService";
import jwt from "jsonwebtoken";
import i18n from "../i18n";
import getEnvProperty from "../utils/getEnvProperty";
import { ENV } from "../constants";
import type { RequestWithUserType } from "../types";

class UserController {}

export default new UserController();
