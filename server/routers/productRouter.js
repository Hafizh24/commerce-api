const productController = require('../controllers/productController')

const router = require('express').Router()

router.post('/', productController.addProduct)
router.get('/', productController.getProducts)

module.exports = router
