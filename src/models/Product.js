const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Product", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: { 
      type: DataTypes.STRING, 
      allowNull: false,
    },

    image_id: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    threeDi: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },
    rating: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    averageRating: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
