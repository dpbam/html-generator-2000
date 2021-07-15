class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return `The employee's name is ${this.name} and an email address of ${this.email}`;
    }

    getId() {
        return `They have an id of ${this.id}`;
    }

    getEmail() {
        return `They have an email address of ${this.email}`
    }

    getRole() {
        return 'Employee';
    }

    // getInformation() {
    //     return {
    //         name: this.name, 
    //         id: this.id, 
    //         email: this.email
    //     }
    // }
}

module.exports = Employee;
