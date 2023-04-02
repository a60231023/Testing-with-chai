const router = require('express').Router();
const controller = require('../controller/controller.js')




router.get('/home',controller.hello)




module.exports = router;