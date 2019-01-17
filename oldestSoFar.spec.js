const { 
    oldestSoFar, 
} = require('./oldestSoFar')

const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]

test('oldestSoFar', () => {
    const oldPerson = oldestSoFar(people)
    expect(oldPerson).toEqual({name: 'Rachel', age: 56})
})