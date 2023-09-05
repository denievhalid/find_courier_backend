import type { Base32SecretKey } from "@otplib/core/authenticator";
import type { Request } from "express";

export type RouteType = {
  _id: string;
  city_name: string;
  city_kladr: number;
};

export type AdType = {
  title: string;
  route: {
    from: RouteType;
    to: RouteType;
  };
  images?: string | [string];
  price: number;
  user: UserType;
  weight: string;
};

export type UserType = {
  phoneNumber: number;
  name?: string;
  gender?: string;
  city?: string;
};

export type FavoriteType = {
  ad: AdType;
};

export type PinCodeType = {
  deadline: Date;
  secret: Base32SecretKey;
  phoneNumber: number;
};

export type RequestWithUserType = {
  user: string;
} & Request;
