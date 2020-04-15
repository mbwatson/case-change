const should = require('should')
const { kebabCase } = require('./index')

console.log('Initializing tests...')

// 

true.should.equal(true)
kebabCase('this-is-a-test').should.equal('this-is-a-test')
kebabCase('This is a test').should.equal('this-is-a-test')
kebabCase('This  is a test').should.equal('this-is-a-test')

