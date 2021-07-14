const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name);
        super(id);
        super(email);

        this.officeNumber = officeNumber;
        this.github = github;
    }
}