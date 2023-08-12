export type LocationType = {
  city_name: string;
  city_kladr_id: number;
};

export type AdType = {
  title: string;
  from: LocationType;
  to: LocationType;
  images: [string];
  price: number;
  user: UserType;
};

export type UserType = {
  login: string;
  password: string;
};
