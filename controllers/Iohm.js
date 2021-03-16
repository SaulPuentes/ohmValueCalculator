const { calculateIohmValue, calculateItolerance } = require('../services/Iohms')
const { validateFields } = require('../utils/Validations')

const calculateIohm = (req, res) => {
    try {
        // validate required fields
        validateFields(['band-a', 'band-b', 'band-c', 'band-d'], req.body, res)

        // calculate ohm based on colors
        const ohm = calculateIohmValue(req.body)

        const tolerance = calculateItolerance(req.body)

        const max = ohm + (ohm * (tolerance/100))
        const min = ohm - (ohm * (tolerance/100))

        return res.status(200).send({
          resistance: ohm,
          tolerance,
          max,
          min
        })
    } catch (error) {
      return res.status(400).send({message: error.message})
    }
  }

module.exports = { calculateIohm }