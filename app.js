const express = require('express')
const cors = require('cors')
const { requireJsonContent } = require('./middlewares')
const { calculateIohm } = require('./controllers/Iohm')

const app = express()
app.use(cors())

const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/', requireJsonContent(), calculateIohm)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})