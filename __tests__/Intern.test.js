const Intern = require("../lib/Intern.js");

test("creates the Intern object", () => {
    const intern = new Intern("Kate", "567", "kate@hotmail.com", "Macomb School");

    // expect(intern.name).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets school name", () => {
    const intern = new Intern("Macomb School");

    expect(intern.getSchool()).toEqual(expect.any(String));
});