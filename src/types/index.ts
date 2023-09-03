import type { Base32SecretKey } from "@otplib/core/authenticator";

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
  isNew: boolean;
  login: number;
  name?: string;
  gender?: string;
  city?: string;
};

export type FavoriteType = {
  ad: AdType;
};

export type VerifyType = {
  _id?: string;
  deadline: Date;
  secret: Base32SecretKey;
  user: UserType;
};
