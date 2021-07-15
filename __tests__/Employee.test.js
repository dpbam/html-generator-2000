const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Jeff", 123, "jeff@hotmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee info", () => {
    const employee = new Employee("Jeff");

    // expect(employee.getInfo()).toEqual(expect.)
})