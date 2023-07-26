"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = require("../controllers/OrderController");
const router = (0, express_1.Router)();
router.get("/", OrderController_1.getOrders);
router.get("/:id", OrderController_1.getOrder);
router.post("/", OrderController_1.createOrder);
exports.default = router;
