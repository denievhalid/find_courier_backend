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
  cover: {
    uri: string;
  };
  images: Array<{ uri: string }>;
  price: number;
  user: UserType;
  weight: string;
  status: "pending" | "approved" | "rejected";
  isFavorite?: boolean;
};

export type DeliveryType = {
  route: {
    from: RouteType;
    to: RouteType;
  };
  user: UserType;
};

export type UserType = {
  avatar?: string;
  phoneNumber: number;
  name: string;
  gender: string;
  city: string;
  route: RouteType;
};

export type FavoriteType = {
  ad: AdType;
  user: UserType;
};

export type PinCodeType = {
  deadline: Date;
  secret: Base32SecretKey;
  phoneNumber: number;
};

export type RequestWithUserType = {
  user: string;
} & Request;

export type Filter =
  | "eq"
  | "neq"
  | "lt"
  | "lte"
  | "gt"
  | "gte"
  | "in"
  | "nin"
  | "null";

export type Query = {
  sort?: string[] | null;
  filter?: Filter | null;
  limit?: number | null;
  offset?: number | null;
  page?: number | null;
};
