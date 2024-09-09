const express = require('express')
const userController = require('../controllers/userController')


const router = express.Router()


router.post('/login', async (req, res) => {
    userController.login(req, res);
})

router.post('/signup', async (req, res) => {
    userController.signup(req, res);
});

module.exports = router;