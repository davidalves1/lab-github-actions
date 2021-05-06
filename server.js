const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(cors())
app.use(helmet())

app.get('/', (_, res) => {
  res.json({ status: 'OK' })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server on 127.0.0.1:${PORT}`))
