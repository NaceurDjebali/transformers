const { fastSearch } = require('./cars.js')

const cars = [
    {brand: 'Toyota', model: 'Aygo'},
    {brand: 'Skoda', model: 'Octavia'},
    {brand: 'Volkswagen', model: 'Passat'},
    {brand: 'Mercedes', model: 'CLS'},
    {brand: 'Seat', model: 'Ibiza'}
]

test('Cars search fast (too furious)', () => {
    const car = fastSearch('Mercedes', cars)
    expect(car).toEqual({brand: 'Mercedes', model: 'CLS'})
})