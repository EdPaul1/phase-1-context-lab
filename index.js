/* Your Code Here */
function createEmployeeRecord(array){
    const recordObj = {}
    recordObj.firstName = array[0],
    recordObj.familyName = array[1],
    recordObj.title = array[2],
    recordObj.payPerHour = array[3],
    recordObj.timeInEvents = [],
    recordObj.timeOutEvents = []
    
    return recordObj;

}
console.log(createEmployeeRecord(["Gray", "Worm", "Security", 1]))

function createEmployeeRecords(arrays){
    const employeeRecords = [];
    arrays.forEach((array) => {
        const employeeRecord = createEmployeeRecord(array);
        employeeRecords.push(employeeRecord);

    });
    return employeeRecords;
}

function createTimeInEvent(dateStamp) {
const [date, hour] = dateStamp.split(' ');
const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date,
};
this.timeInEvents.push(timeInEvent);
return this;
}

function createTimeOutEvent(dateStamp) {
const [date, hour] = dateStamp.split(' ');
const timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
};
this.timeOutEvents.push(timeOutEvent);
return this;
}
function hoursWorkedOnDate(date) {
const timeInEvent = this.timeInEvents.find(event => event.date === date);
const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
return hoursWorked;
}

function wagesEarnedOnDate(date) {
const hoursWorked = hoursWorkedOnDate.call(this, date);
const payRate = this.payPerHour;
const wagesEarned = hoursWorked * payRate;
return wagesEarned;
}

// function allWagesFor() {
//     const datesWorked = this.timeInEvents.map(event => event.date);
//     const wagesEarned = datesWorked.reduce((totalWages, date) => {
//       return totalWages + wagesEarnedOnDate.call(this, date);
//     }, 0);
//     return wagesEarned;
//   }

function findEmployeeByFirstName(srcArray, firstName) {
return srcArray.find(record => record.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
const totalPayroll = employeeRecords.reduce((total, record) => {
    return total + allWagesFor.call(record);
}, 0);
return totalPayroll;
}
   
  


  
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


