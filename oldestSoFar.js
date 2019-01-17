function oldestSoFar(people){
    // Input
    // people [{ name: 'Rein', age: 31 }, ...]

    return people.reduce((oldestPersonSoFar, person) => {
        console.log(oldestPersonSoFar, person)
        if(oldestPersonSoFar.age > person.age){
            return oldestPersonSoFar
        }

        return person
    })

    // Output
    // { name: 'Rein', age: 31 }
}

module.exports.oldestSoFar = oldestSoFar