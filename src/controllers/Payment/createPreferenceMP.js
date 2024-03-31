const mercadopago = require("mercadopago");

const { DB_URL, URL_PRODUCTION, URL_LOCAL, MP_TOKEN } = process.env;


const createPreference = async (req, res) => {
  mercadopago.configure({
    access_token: MP_TOKEN,
  });
  
  try {
    const { items, userId } = req.body;
    console.log("USER:", userId);
    console.log("ITEMS", items);
    let preference = {
      items,
      back_urls: {
        success: `${URL_PRODUCTION}`,
        failure: `${URL_PRODUCTION}`,
        pending: `${URL_PRODUCTION}`,
      },
      auto_return: "approved",
      notification_url: `${DB_URL}/api/payment/webhook/${userId}`,
    };

    const response = await mercadopago.preferences.create(preference);
    console.log(response);
    const data = response.body;
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred: " + error.message });
  }
};

module.exports = createPreference;
