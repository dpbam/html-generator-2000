const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee("Jeff");

    expect(employee.name).toBe("Jeff");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("jeff@hotmail.com");
});