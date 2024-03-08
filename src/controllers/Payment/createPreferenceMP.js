const mercadopago = require("mercadopago");

const { DB_URL, URL_PRODUCTION , URL_LOCAL } = process.env;

const createPreference = async (req, res) => {
  try {

    const { items, transaction_amount, userId } = req.body;
    console.log('USER:',userId);
    let preference = {
      transaction_amount,
      items,
      back_urls: {
        success: `${URL_PRODUCTION}`,
      },
      notification_url: `${DB_URL}/api/payment/webhook/${userId}`,
    };

    const response = await mercadopago.preferences.create(preference);
    const data = response.body;
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred: " + error.message });
  }
};

module.exports = createPreference;
