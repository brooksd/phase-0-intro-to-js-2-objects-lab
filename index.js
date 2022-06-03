// Write your solution in this file!

const employee = {name: "Donald Brooks", streetAddress: "5th Avenue Ngong Lane"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
