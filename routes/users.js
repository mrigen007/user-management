const express = require('express');
const router = express.Router();
const { registerUser, getUserList, login, updateUser, deleteUser } = require('../controller/users');
const validateToken = require('../middlewares/auth');

router.post('/login', login);
router.post('/registeruser', registerUser);
router.get('/list', validateToken, getUserList);
router.patch('/update/:userId', validateToken, updateUser);
router.delete('/delete', validateToken, deleteUser);

module.exports = router;