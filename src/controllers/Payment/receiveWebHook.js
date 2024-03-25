const axios = require("axios");

const receiveWebHook = async (req, res) => {
  const paymentId = req.query.id;

  try {
    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        headers: {
          Authorization: `Bearer ${client.accessToken}`,
        },
      }
    );

    if (response.status === 200) {
      const data = response.data;
      console.log(data);
    }
    res.sendStatus(200);
  } catch (error) {
    console.error("Error:", error);
    res.sendStatus(500);
  }
};

module.exports = receiveWebHook;
