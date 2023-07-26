import type { Request, Response } from "express";
import OrderService from "../services/OrderService";

const { create, getList, getOne } = OrderService;

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await getList();
    return res.json(orders);
  } catch (err) {}
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await getOne();
    return res.json(order);
  } catch (err) {}
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      body: { images, title, price },
    } = req;

    console.log(req.body);

    await create({ images, title, price });
    return res.send("200");
  } catch (err) {
    return res.send(err);
  }
};
