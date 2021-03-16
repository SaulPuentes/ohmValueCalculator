const { calculateIohmValue } = require('../services/Iohms')
const { validateFields } = require('../utils/Validations')

const calculateIohm = (req, res) => {
    try {
        // validate required fields
        validateFields(['band-a', 'band-b', 'band-c', 'band-d'], req.body, res)

        // calculate ohm based on colors
        const result = calculateIohmValue(req.body)

        return res.status(200).send(result)
    } catch (error) {
      return res.status(400).send({message: error.message})
    }
  }

module.exports = { calculateIohm }