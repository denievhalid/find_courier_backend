"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    login: {
        type: Number,
        unique: true,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("User", schema);
