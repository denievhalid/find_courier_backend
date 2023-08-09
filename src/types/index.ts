export type OrderType = {
  _id?: string;
  date?: Date;
  from: string;
  to: string;
  title: string;
  price: number;
  images?: string[];
};
