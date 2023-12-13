// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const driversList = ['Ann', 'Nora', 'Amani', 'Monica'];
    return driversList.slice(0,2);
}

const returnLastTwoDrivers = function(){
    const driversList = ['Ann', 'Nora', 'Amani', 'Monica'];
    return driversList.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer){
    return function (fare){
        return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driveSelector){
    return driveSelector(drivers);
}