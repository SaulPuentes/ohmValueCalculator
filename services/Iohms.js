const { calculateOhmValue } = require('../utils/IOhmValueCalculator')

const calculateIohmValue = (colors) => {
    return calculateOhmValue(
        colors['band-a'],
        colors['band-b'],
        colors['band-c'],
        colors['band-d'])
}

module.exports = {
    calculateIohmValue
}