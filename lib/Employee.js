class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole();
    };

    getName() {
        return this.name;
    }

    getId() {
        return `ID: ${this.id}`;
    }

    getEmail() {
        return `Email: ${this.email}`;
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
