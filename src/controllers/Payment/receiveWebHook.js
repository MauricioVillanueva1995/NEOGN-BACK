const mercadopago = require("mercadopago");
const axios = require("axios");

const { DB_URL } = process.env;

const processedRequests = new Set();

const receiveWebHook = async (req, res) => {
  try {
    const { query } = req;
    const { params } = req;
    console.log("params", params.userId);
    console.log("req.body", req.body);

    const topic = query.topic || query.type;

    console.log({ topic });

    const requestId = query.id || query["data.id"];

    if (processedRequests.has(requestId)) {
      console.log(
        `Solicitud duplicada recibida con ID: ${requestId}. Ignorando.`
      );
      res.send();
      return;
    }

    processedRequests.add(requestId);

    switch (topic) {
      case "payment":
        const paymentId = requestId;
        console.log(topic, "getting payment", paymentId);

        const payment = await mercadopago.payment.findById(paymentId);

        console.log("payment.body", payment.body);
        console.log("payment status", payment.body.status);

        var paidAmount = 0;

        if (payment.body.status === "approved") {
          paidAmount += payment.body.transaction_amount;
        }

        // Ahora puedes acceder a las propiedades de payment dentro de este bloque

        const merchantOrder = await mercadopago.merchant_orders.findById(
          payment.body.order.id
        );

        console.log("payment status outside the block", payment.body.status);
        console.log("payment body outside the block", payment.body);
        console.log("merchant order body", merchantOrder);

        if (paidAmount >= merchantOrder.body.total_amount) {
          console.log("El pago se completó 😄");
          try {
            if (params.userId && params.userId.trim() !== "") {
              const createUserResponse = await axios.post(
                `${DB_URL}/api/orders`,
                {
                  userId: params.userId,
                  paymentId: requestId,
                  status: merchantOrder.body.order_status,
                  total: merchantOrder.body.total_amount,
                  products: merchantOrder.body.items,
                  preferenceId: merchantOrder.body.preference_id,
                }
              );
              if (createUserResponse.status === 200) {
                console.log("Order Created");
              }
            }
          } catch (error) {
            console.log("Error al crear la orden:", error.message);
          }
        }

        break;

      case "merchant_order":
        const orderId = requestId;
        console.log(topic, "getting merchant order", orderId);
        const body = await mercadopago.merchant_orders.findById(orderId);
        console.log("showing body", body);
        break;

      default:
        console.log("El tema recibido no es válido.");
        break;
    }

    res.send();
  } catch (error) {
    console.log("Error en receiveWebHook:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = receiveWebHook;
