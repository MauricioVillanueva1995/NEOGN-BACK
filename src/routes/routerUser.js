const { Router } = require("express");
const fs = require("fs-extra");


const deleteUser = require("../controllers/User/deleteUser");
const getUserById = require("../controllers/User/getUserById");
const getLogInUser = require("../controllers/User/getLogInUser");
const getUsers = require("../controllers/User/getUsers");
const putUser = require("../controllers/User/putUser");
const restoreUser = require("../controllers/User/restoreUser");
const signUp = require("../controllers/User/signUp");
const postMessageContact = require("../controllers/User/postMessageContact");

const router = Router();

// traer
router.get("/", async (req, res) => {
  try {
    const users = await getUsers();

    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Log In
router.get("/logIn/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getLogInUser(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Registrarse
router.post("/signUp", async (req, res) => {
  try {
    console.log(req.body);
    const { clientId, name, email, photo } = req.body;
    const response = await signUp(clientId, name, email, photo);

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
});

//borrado logico y restaurar
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);

    res.status(200).json({ message: "The user has been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.put("/restore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await restoreUser(id);

    res.status(200).json({ message: "The user has been restored" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

//modificar
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const user = await putUser(id, data);

    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post("/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    postMessageContact(name, email, message);

    res.json({ message: "Sent" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
