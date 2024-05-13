const express = require('express')
const PORT = 2000
const db = require('./models')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const productRouter = require('./routers/productRouter')
const transactionRouter = require('./routers/transactionRouter')

app.use('/product', productRouter)
app.use('/transaction', transactionRouter)

app.listen(PORT, () => {
  // db.sequelize.sync({ alter: true })
  console.log(`server is running on port ${PORT}`)
})
