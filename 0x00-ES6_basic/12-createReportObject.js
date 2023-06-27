const createEmployeesObject = require('./11-createEmployeesObject');

function createReportObject(employeesList) {
    const employList = {
        [employeesList]: {},
    }
    return employList;
}

const employ = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createReportObject('marketing', ['Sylvie']),
}

const report = createReportObject(employ);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));