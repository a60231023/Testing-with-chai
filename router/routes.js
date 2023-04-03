const router = require("express").Router();
const controller = require("../controller/controller.js");

router.get("/home", controller.hello);
router.post("/register", controller.register);
router.get("/getAllUser", controller.getAllUser);
router.get("/getSingleUser/:id", controller.getSingleUser);
module.exports = router;
