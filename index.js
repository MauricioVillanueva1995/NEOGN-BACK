const server = require("./src/server");
const { conn } = require("./src/db.js");

const dataProducts = require("./api/db.json");

const { Product, User } = require("./src/db");
const PORT = process.env.PORT || 3001;

const calculateAverageRating = require("./src/utils/helpers/Average/avgRating");

// Define una función para limpiar la base de datos
const cleanDatabase = async () => {
  try {
    // Elimina todos los registros de la tabla Product
    await Product.destroy({ where: {} });

    // Elimina todos los registros de la tabla User
    await User.destroy({ where: {} });

    console.log("Base de datos limpiada exitosamente.");
  } catch (error) {
    console.error("Error al limpiar la base de datos:", error);
  }
};

// Sincroniza la base de datos después de limpiarla
conn
  .sync({ force: false })
  .then(async () => {
    // Llama a la función para limpiar la base de datos
    await cleanDatabase();

    // Inicia el servidor después de limpiar la base de datos
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