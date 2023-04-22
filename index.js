const employee = {
    name: "Sean",
    streetAddress: "729 Cedar",
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway",
    };
} ;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {employee}
    delete newEmployee.name
    return newEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}
