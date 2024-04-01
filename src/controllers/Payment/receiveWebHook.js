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
    const userId = req.body.userId;
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
    let payment;
    let body;
    switch (topic) {
      case "payment":
        const paymentId = requestId;
        console.log(topic, "getting payment", paymentId);
        payment = await mercadopago.payment.findById(paymentId);
        console.log("payment.body", payment.body);
        console.log("payment status", payment.body.status);
        body = await mercadopago.merchant_orders.findById(
          payment.body.order.id
        );
        break;
      case "merchant_order":
        const orderId = requestId;
        console.log(topic, "getting merchant order", orderId);
        body = await mercadopago.merchant_orders.findById(orderId);
        console.log("showing body", body);
        break;
      default:
        console.log("El tema recibido no es válido.");
        res.send();
        return;
    }
    console.log("payment status outside the block", payment?.body?.status);
    console.log("payment body outside the block", payment?.body);
    console.log("body merchant order", body);
    var paidAmount = 0;
    if (payment?.body?.status === "approved") {
      paidAmount += payment?.body?.transaction_amount;
    }
    if (paidAmount >= body?.body?.total_amount) {
      console.log("El pago se completó 😄");
      try {
        if (userId && userId.trim() !== "") {
          const createUserResponse = await axios.post(`${DB_URL}/api/orders`, {
            userId: userId,
            paymentId: requestId,
            status: body.body.order_status,
            total: body.body.total_amount,
            products: body.body.items,
            preferenceId: body.body.preference_id,
          });
          if (createUserResponse.status === 200) {
            console.log("Order Created");
          }
        }
      } catch (error) {
        console.log("Error al crear la orden:", error.message);
      }
    }
    res.send();
  } catch (error) {
    console.log("Error en receiveWebHook:", error.message);
    res.status(500).json({ error: error.message });
  }
};
module.exports = receiveWebHook;
