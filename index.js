const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}
returnFirstTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
    // return drivers.slice(Math.max(drivers.length - 4, 2))
}
returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer) {
    return fare => fare * integer
}
const variable = createFareMultiplier;
const fareDoubler = variable(2)
const fareTripler = variable(3)
function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}
