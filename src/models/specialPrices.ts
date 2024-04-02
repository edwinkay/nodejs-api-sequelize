import { DataTypes } from "sequelize";
import db from "../db/connection";

interface SpecialPriceAttributes {
  idusuarios: number;
  usuario: string;
  marca: string;
}


const SpecialPrice = db.define(
  "usuarios",
  {
    idusuarios: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING,
    },

    marca: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default SpecialPrice;



