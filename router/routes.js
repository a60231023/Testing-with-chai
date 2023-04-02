const router = require("express").Router();
const controller = require("../controller/controller.js");

router.get("/home", controller.hello);

router.post("/register", controller.register);

router.get("/getAllUser", controller.getAllUser);

module.exports = router;
