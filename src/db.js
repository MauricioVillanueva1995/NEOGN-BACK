require("dotenv").config();
const { Sequelize } = require("sequelize");

const orderModel = require("./models/Order");
const paymentModel = require("./models/Payment");
const productModel = require("./models/Product");
const userModel = require("./models/User");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     logging: false,
//     native: false,
//   }
// );

const sequelize = new Sequelize(DB_DEPLOY, {
    logging: false,
    native: false,
  }
);

orderModel(sequelize);
paymentModel(sequelize);
productModel(sequelize);
userModel(sequelize);

const { User, Product } = sequelize.models;

Product.belongsToMany(User, { through: "ProductsUser" });
User.belongsToMany(Product, { through: "ProductsUser" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
