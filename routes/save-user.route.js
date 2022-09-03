const express = require("express");
const userController = require("../controllers/users.controller");
const router = express.Router();

router
    .route("/")
    .post(userController.saveAUser)

module.exports = router;