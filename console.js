'use strict'

const TEMPERATURE = 21.3
const FRUITS = ['apple', 'pear', 'orange']
const BOOLNUMBER = true
const AGE = 18

console.log('Yo.\n' + TEMPERATURE)
console.log('The collection of fruits is ', FRUITS)
console.log('<h1>No HTML interperter</h1>')
console.log(AGE + ' eighteen ' + BOOLNUMBER + null + undefined)
console.log('This is a group')
console.group()
console.log('Group content')
console.groupEnd()
console.log('This is a second group (closed by default)')
console.group()
console.log('Content of the second group')
console.groupEnd()
