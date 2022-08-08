const express = require("express");
const router = express.Router();
const userServices = require("../../services/userServices");

router.get("/", (req, res) => {
  const allUsers = userServices.getAllUsers();
  res.json(allUsers);
});

router.get("/:id", async (req, res) => {
  try {
    const searchUser = await userServices.getUserById(req.params.id);
    res.status(200).json(searchUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await userServices.addNewUser(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await userServices.putUserById(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await userServices.deleteUserById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
