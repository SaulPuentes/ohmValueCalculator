const colorChart        = require('./constants/ColorChart')
const colorMultiplier   = require('./constants/ColorMultiplier')
const colorTolerance   = require('./constants/ColorTolerance')


/**
 * 
 * @param {String} bandAColor   The color of the first figure of component value band. 
 * @param {String} bandBColor   The color of the second significant figure band.
 * @param {String} bandCColor   The color of the decimal multiplier band.
 * @param {String} bandDColor   The color of the tolerance value band.
 * @returns {int}               The ohm value
 */
const calculateOhmValue = (bandAColor = '', bandBColor = '', bandCColor = '', bandDColor = '') => {
    
    // clean a little the param value
    bandAColor = bandAColor.toString().toLowerCase().trim()
    bandBColor = bandBColor.toString().toLowerCase().trim()
    bandCColor = bandCColor.toString().toLowerCase().trim()

    // Validations of color names
    // Validate bandAColor
    if ( !colorChart[bandAColor] ) {
        throw Error(`The Band A Color (${bandAColor}) is not on the list chart of colors`)
    }

    // Validate bandBColor
    if ( !colorChart[bandBColor] ) {
        throw Error(`The Band B Color (${bandBColor}) is not on the list chart of colors`)
    }

    // Validate bandCColor
    if ( !colorMultiplier[bandCColor] ) {
        throw Error(`The Band C Color (${bandCColor}) is not on the list chart of colors`)
    }

    // Do the calculation
    // First digit
    var ohm = colorChart[bandAColor] * 10     
    // Secound digit
    ohm += colorChart[bandBColor]
    // Multiplier
    ohm = ohm * colorMultiplier[bandCColor]

    return ohm
}

const calculateTolerance = (bandDColor = '') => {

    bandDColor = bandDColor.toString().toLowerCase().trim()

    // Validate bandDColor
    if ( !colorTolerance[bandDColor] ) {
        throw Error(`The Band D Color (${bandDColor}) is not on the list chart of colors`)
    }

    // Tolerance
    var tolerance = colorTolerance[bandDColor]

    return tolerance
}

module.exports = {
    calculateOhmValue,
    calculateTolerance
}