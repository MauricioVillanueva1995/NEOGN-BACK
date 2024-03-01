const db = require("../../db");

const getAdmin = async (email, password) => {
  try {
    const user = await db.User.findOne({ where: { email, password } });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = getAdmin;
