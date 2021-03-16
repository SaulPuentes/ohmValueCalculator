
## Propuse
The electronic color code (http://en.wikipedia.org/wiki/Electronic_color_code) is used to indicate the values or ratings of electronic components, very commonly for resistors.

## Install
`npm install`

## Run
`npm run start green blue orange`

## Run REST API
`npm run app`

## Use
### On code
```node
const calc = require('./utils/IOhmValueCalculator')

console.log( calc.calculateOhmValue('green', 'blue', 'orange', 0) )
```

### On comand line
`npm run start <bandAColor> <bandBColor> <bandCColor> <bandDColor>`

You can run the classic -npm run start- and after the colors you are looking for example
`npm run start green blue orange`


## Description
Colors to Band A and B
```
    black
    brown
    red
    orange
    yellow
    green
    blue
    violet
    grey
    white
```
Colors to Band C
```
    black
    brown
    red
    orange
    yellow
    green
    blue
    violet
    grey
    white
    gold
    silver
```

## Run Tests
`npm test`

## Run New Test
`npm run new-test`

## Still missing
* For the moment I am only using the first 3 colors, so the 4th color is useless 
* I think it will be fine to implement some to string to show something like 56k Ohms 2%
* Method to receive an object as param instead of the strings
* Add constant on REST API
* Missing some Unit test on REST API 
* Add linting (ESLint)