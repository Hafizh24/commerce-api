const db = require('../models')
const Transaction = db.Transaction

module.exports = {
  addTransaction: async (req, res) => {
    try {
      const { ProductId } = req.body

      console.log(ProductId)
      const transaction = await Transaction.create({
        ProductId
      })
      res.status(200).json({ message: 'Transaction added successfully' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  getTransactions: async (req, res) => {
    try {
      const transactions = await Transaction.findAll({ include: 'Product' })
      res.status(200).json(transactions)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
