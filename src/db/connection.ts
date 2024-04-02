
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('almacen', 'root', 'lucerito', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;

