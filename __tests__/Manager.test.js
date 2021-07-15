const Manager = require("../lib/Manager");

test("creates a manager object", () => {
    const manager = new Manager("Greg", "123", "greg@hotmail.com", 3);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets employee's role", () => {
    const manager = new Manager("Manager");

    expect(manager.getRole()).toEqual(expect.any(String));
})