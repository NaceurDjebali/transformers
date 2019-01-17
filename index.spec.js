const { greet } = require('./index')

test('A new Farm can be created', () => {
    const greeting = greet()
    expect(greeting).toBe('hi')
})