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
    bandDColor = bandDColor.toString().toLowerCase().trim()

    // Validations of color names
    // Validate bandAColor
    if ( !colorChart[bandAColor] ) {
        throw Error(`The 1st Digit (${bandAColor}) is not on the list chart of colors`)
    }

    // Validate bandBColor
    if ( !colorChart[bandBColor] ) {
        throw Error(`The 2nd Digit (${bandBColor}) is not on the list chart of colors`)
    }

    // Validate bandCColor
    if ( !colorMultiplier[bandCColor] ) {
        throw Error(`The multiplier (${bandCColor}) is not on the list chart of colors`)
    }

    // Validate bandDColor
    if ( !colorTolerance[bandDColor] ) {
        throw Error(`The tolerance (${bandDColor}) is not on the list of chart of colors`)
    }

    // Do the calculation
    // First digit
    var ohm = colorChart[bandAColor] * 10     
    // Secound digit
    ohm += colorChart[bandBColor]
    // Multiplier
    ohm = ohm * colorMultiplier[bandCColor]
    // Tolerance
    var tolerance = colorTolerance[bandDColor]

    var max = ohm + (ohm * (tolerance/100))
    var min = ohm - (ohm * (tolerance/100))

    return {
        resistance: ohm,
        tolerance,
        max,
        min
    }
}    

module.exports = {
    calculateOhmValue,
}