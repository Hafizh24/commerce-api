const transactionController = require('../controllers/transactionController')

const router = require('express').Router()

router.post('/', transactionController.addTransaction)
router.get('/', transactionController.getTransactions)

module.exports = router
