const db = require("../../db");

const getUser = async (id) => {
  try {
    const user = await db.User.findOne({ where: { id } });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = getUser;
