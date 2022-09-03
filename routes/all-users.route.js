const express = require("express");
const userController = require("../controllers/users.controller");
const router = express.Router();

router
    .route("/")
    .get(userController.getAllUsers);

router
    .route('/:id')
    .get(userController.viewUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;