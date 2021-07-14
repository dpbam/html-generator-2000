const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
    const manager = new Manager("Greg", "3");

    expect(manager.name).toBe("Greg");
    // expect(manager.id).toEqual(expect.any(Number));
    // expect(manager.email).toBe(expect.any(String));

    expect(manager.officeNumber).toEqual(expect.any(Number));
});