const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = 3;
    }
}

module.exports = Manager;