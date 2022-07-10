const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');
let checkSession = require('../middlewares/check-session.js');
let upload = require('../middlewares/upload-image');


router.get('/login', userController.login);
router.post('/submit-login', userController.verifyLogin);
//Server
router.post('/activate-account', userController.activateAccount);
router.post('/email/send-code', userController.submitRegister);
router.get('/register', userController.register);
router.post('/verify', userController.verify);
router.post('/email/excited', userController.emailExcited);
router.get('/verify', userController.register);

module.exports = router;
