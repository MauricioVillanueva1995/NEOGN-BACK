const { Router } = require("express");
const getAdmin = require("../controllers/Admin/getAdmin");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { email, password } = req.query;
    console.log(email, password);
    const response = await getAdmin(email, password);

    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

module.exports = router;
