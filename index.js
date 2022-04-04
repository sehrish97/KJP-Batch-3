/** @format */

const { get } = require("express/lib/response");

EmployeeData = [
  {
    ID: 0101,
    firstName: "Asad",
    lastName: "Khan",
    salary: 120000,
  },
  {
    ID: 01011,
    firstName: "Sehr",
    lastName: "Khan",
    salary: 120000,
  },
  {
    ID: 010111,
    firstName: "Mishi",
    lastName: "Khan",
    salary: 120000,
  },
];
temp = "";
// console.log(EmployeeData);
class Employee {
  constructor(ID, firstName, lastName, salary) {
    this.ID = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
  getID() {
    temp = EmployeeData.filter((element) => {
      if (element.firstName == this.firstName) {
        return element;
      }
    });
    if (temp.length > 0) {
      console.log(temp[0].ID);
    } else {
      console.log("NOT FOUND");
    }
  }
  getFirstName() {
    temp = EmployeeData.filter((element) => {
      if (element.ID == this.ID) {
        return element;
      }
    });
    if (temp.length > 0) {
      console.log(temp[0].firstName);
    } else {
      console.log("NOT FOUND");
    }
  }
  getLastName() {
    temp = EmployeeData.filter((element) => {
      if (element.salary == this.salary) {
        return element;
      }
    });
    if (temp.length > 0) {
      console.log(temp[0].lastName);
    } else {
      console.log("NOT FOUND");
    }
  }
  getsalary() {
    temp = EmployeeData.filter((element) => {
      if (element.ID == this.ID) {
        return element;
      }
    });
    if (temp.length > 0) {
      console.log(temp[0].salary);
    } else {
      console.log("NOT FOUND");
    }
  }
}

let employee = new Employee(0101);
employee.getID();
employee.getFirstName();
employee.getLastName();
employee.getsalary();
