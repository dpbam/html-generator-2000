class Employee {
    constructor(name = '') {
        this.name = name;

        this.id = 453;
        this.email = "jeff@hotmail.com";
    };

    getName() {
        return `The employee's name is ${this.name} and an email address of ${this.email}`;
    }

    getId() {
        return `They have an id of ${this.id}`;
    }

    getEmail() {

    }

    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;
