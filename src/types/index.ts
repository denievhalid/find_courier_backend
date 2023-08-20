export type LocationType = {
  _id: string;
  city_name: string;
  city_kladr_id: number;
};

export type AdType = {
  title: string;
  from: LocationType;
  to: LocationType;
  images?: string | [string];
  price: number;
  user: UserType;
  weight: number;
};

export type UserType = {
  login: string;
  password: string;
};

export type FavoriteType = {
  ad: AdType;
};
