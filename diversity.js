const people = [
    {id: 1, name: 'James', nationality: 'GB'},
    {id: 2, name: 'Adam', nationality: 'CA'},
    {id: 3, name: 'Larry', nationality: 'US'},
    {id: 4, name: 'Fred', nationality: 'NL'},
    {id: 5, name: 'Anna', nationality: 'NL'},
    {id: 6, name: 'Emily', nationality: 'DE'},
    {id: 7, name: 'Lenny', nationality: 'US'},
    {id: 8, name: 'Cara', nationality: 'NL'},
    {id: 9, name: 'Nathalie', nationality: 'NL'},
]

const clubs = [
    {name: 'Book Club', members: [9,3,6,2]},
    {name: 'Auto Club', members: [1,2,3]},
    {name: 'Country Club', members: [7,5,8]},
    {name: 'Food Club', members: [5,1,6,7]},
    {name: 'Yoga Club', members: [1,4,5,3,7]},
    {name: 'Garage Band', members: [1,3,8,9]},
    {name: 'Pool Club', members: [6,4,5,8,9]},
]

// {name: 'Book Club', members: [9,3,6,2]} => [ 
    // {id: 1, name: 'James', nationality: 'GB'},
    // {id: 2, name: 'Adam', nationality: 'CA'},
    // {id: 3, name: 'Larry', nationality: 'US'},
    // {id: 4, name: 'Fred', nationality: 'NL'},]


const output = clubs.map(club => {
    return club.members.map(memberId => {
        return people.find(person => person.id === memberId).nationality
    })
}).map(clubNations => {
    return new Set(clubNations).size
}).map((diversityRating, index) => {
    return { ...clubs[index], diversityRating} 
}).reduce((accumulator, club) => {
    if(club.diversityRating >  accumulator.diversityRating){
        // this club is the most diverse, so forget all the other ones
        return { diversityRating: club.diversityRating, clubs: [ club ]}
    }

    if(club.diversityRating === accumulator.diversityRating){
        accumulator.clubs.push(club)
        return accumulator
    }

    return accumulator    
}, { diversityRating: 0, clubs: []})

console.log(output)