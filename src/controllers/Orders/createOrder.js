const db = require("../../db");

const createOrder = async (data) => {
  const { userId, paymentId, status, total, products, preferenceId } = data;

  try {
    // Crear la orden
    console.log('userId en createOrderd', userId);
    const newOrder = await db.Order.create({
      paymentId,
      status,
      total,
      products,
      preferenceId,
      userId
    });

    return newOrder;
  } catch (error) {
    throw new Error("Error creating order: " + error.message);
  }
};

module.exports = createOrder;