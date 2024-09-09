const express = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleware/authMiddleware')

const router = express.Router()


router.get('/core', auth , async (req, res) => {
    userController.getVault(req, res);
})

router.get('/meta', auth , async (req, res) => {
    userController.getMeta(req, res);
})

router.post('/core', auth , async (req, res) => {
    userController.updateVault(req, res);
});

module.exports = router;