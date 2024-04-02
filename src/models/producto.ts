import { DataTypes, Model } from "sequelize";
import db from "../db/connection";

interface ProductoModel extends Model {
  name: string;
  marca: string;
  priceBase: number;
  specialPrice: number | null; 
}

const Producto = db.define<ProductoModel>(
  "Producto",
  {
    name: {
      type: DataTypes.STRING,
    },
    marca: {
      type: DataTypes.STRING,
    },
    priceBase: {
      type: DataTypes.DOUBLE,
    },
    specialPrice: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);


export default Producto;
