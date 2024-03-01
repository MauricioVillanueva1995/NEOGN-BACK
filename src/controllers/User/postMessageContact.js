const { sendContactEmail } = require("../../utils/nodemailer/sendContactEmail");
const {
  receiveContactEmail,
} = require("../../utils/nodemailer/recieveContactEmail");

const postMessageContact = (name, email, message) => {
  sendContactEmail(name, email);
  receiveContactEmail(name, email, message);
};

module.exports = postMessageContact;