"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const SpecialPrice = connection_1.default.define("usuarios", {
    idusuarios: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = SpecialPrice;
