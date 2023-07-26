import { Router } from "express";
import {
  createOrder,
  getOrder,
  getOrders,
} from "../controllers/OrderController";

const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);

export default router;
