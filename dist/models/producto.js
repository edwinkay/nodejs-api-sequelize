"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Producto = connection_1.default.define("Producto", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
    },
    priceBase: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    specialPrice: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Producto;
