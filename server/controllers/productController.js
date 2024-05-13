const db = require('../models')
const Product = db.Product

module.exports = {
  addProduct: async (req, res) => {
    try {
      const { name, price, discount_price, image_url } = req.body

      const findProduct = await Product.findOne({ where: { name } })

      if (findProduct == null) {
        await Product.create({
          name,
          price,
          discount_price,
          image_url
        })
      } else {
        return res.status(400).json({
          status: 'error',
          message: 'Product already exist'
        })
      }
      return res.status(200).json({
        status: 'success',
        message: 'Product added successfully'
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      })
    }
  },
  getProducts: async (req, res) => {
    try {
      const products = await Product.findAll()
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
