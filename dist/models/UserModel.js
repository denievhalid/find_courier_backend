"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    avatar: String,
    phoneNumber: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        //required: true,
    },
    gender: {
        type: String,
        enum: ["f", "m"],
        required: true,
    },
    route: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Route",
    },
});
exports.default = (0, mongoose_1.model)("User", schema);
