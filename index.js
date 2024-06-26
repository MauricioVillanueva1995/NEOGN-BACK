const server = require("./src/server");
const { conn } = require("./src/db.js");

const dataProducts = require("./api/db.json");

const { Product, User } = require("./src/db");
const PORT = process.env.PORT || 3001;

const calculateAverageRating = require("./src/utils/helpers/Average/avgRating");

const cleanDatabase = async () => {
  try {
    await Product.destroy({ where: {} });

    await User.destroy({ where: {} });

    console.log("Base de datos limpiada exitosamente.");
  } catch (error) {
    console.error("Error al limpiar la base de datos:", error);
  }
};

conn
  .sync({ force: true })
  .then(async () => {
    await cleanDatabase();

    server.listen(PORT, async () => {
      let idHard = "SKU000";

      const users = dataProducts.users.map((user) => {
        return user;
      });

      const products = dataProducts.products.map((product) => {
        const rating = product.rating.map((rat) => Math.round(rat));

        product.averageRating = calculateAverageRating(rating);
        product.discount = Math.floor(Math.random() * 25);

        let number = parseInt(idHard.split("U")[1]);
        number = number + 1;
        if (number >= 100) {
          idHard = idHard;
          return {
            ...product,
            id: `SKU${number}`,
          };
        }
        if (number < 10) {
          idHard = `SKU00${number}`;
          return {
            ...product,
            id: idHard,
          };
        }
        idHard = `SKU0${number}`;
        return {
          ...product,
          id: idHard,
        };
      });

      await Product.bulkCreate(products);
      await User.bulkCreate(users);

      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));