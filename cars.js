
// Returns the first car object whose brand matches the brand parameter.
function slowSearch(brand) {
    return cars.find(car => car.brand === brand)
}

function fastSearch(brand, cars) {
    // brand -> "Mercedes"
    // cars -> [{brand: 'Mercedes', model: 'CLS'}]
    // const carsByBrand = {
    //     Mercedes: {brand: 'Mercedes', model: 'CLS'}
    // }

    const carsByBrand = cars.reduce((carIndex, car) => {
        carIndex[car.brand] = car 
        
        return carIndex
        // or a pure funtion using spread operator (...something)
        // return { ...carIndex, [car.brand]: car }
    }, {})
    

    return carsByBrand["Mercedes"]  
}

module.exports.fastSearch = fastSearch