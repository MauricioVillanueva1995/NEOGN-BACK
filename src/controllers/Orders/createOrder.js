const db = require("../../db");

const createOrder = async (data) => {
  const { userId, paymentId, status, total, products, preferenceId } = data;

  try {
    // Crear la orden
    const newOrder = await db.Order.create({
      paymentId,
      status,
      total,
      products,
      preferenceId,
    });

    // Si se proporciona un userId, asociar el usuario a la orden
    if (userId) {
      const user = await db.User.findByPk(userId);

      if (user) {
        // Asociar el usuario a la orden utilizando el método setUsuario
        await newOrder.setUser(user);
      } else {
        throw new Error("The user was not found in the database.");
      }
    }

    return newOrder;
  } catch (error) {
    throw new Error("Error creating order: " + error.message);
  }
};

module.exports = createOrder;