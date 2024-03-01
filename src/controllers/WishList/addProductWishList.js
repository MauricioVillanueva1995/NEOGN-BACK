const db = require("../../db");

const addProductWishList = async (id, idUser) => {
  const productWishList =   await db.Product.findOne({ where: { id } });
  const user = await db.User.findByPk(idUser);


  if (!user) console.log("ID Error");
  if (!productWishList) console.log("Product ID Error");
  await user.addProducts(productWishList);

  return productWishList;
};

module.exports = addProductWishList;
