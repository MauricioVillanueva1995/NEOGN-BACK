const db = require("../../db");

const updateUser = async (id, data) => {
  const user = await db.User.findOne({
    where: { id },
  });

  if (!user) throw new Error("User not found");

  let updateProduct = { ...data };

  await user.update({ ...user, ...updateProduct });

  return user;
};

module.exports = updateUser;
