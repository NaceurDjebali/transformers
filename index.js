function getUserNamesByIds(ids, users){
    // Input
    // [1, 2] ids
    // [{ id: 1, name: 'Semih', age: 20 },] users

    // Filter because, data is the type as before, but array shorter
    // Intermediate step
    // Check users array if there user with this id
    // [1]

    const userNames = ids.filter(id => {
        // return true or false
        return users.find(user => user.id === id) !== undefined
    }).map(id => {
        const user = users.find(user => user.id === id)
        return user.name
    })

    

    return userNames
    // Map does something for each element, array same length before, data is different
    // Output
    // ['Semih']
}

function getExperiencedUserNamesByIds(ids, users, olderThanAge){
    // your code here
    return []
}

module.exports.getUserNamesByIds = getUserNamesByIds
module.exports.getExperiencedUserNamesByIds = getExperiencedUserNamesByIds
