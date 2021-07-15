const Engineer = require("../lib/Engineer.js");

test("creates the engineer object", () => {
    const engineer = new Engineer("Janet", "345", "janet@hotmail.com", "janet2000");

    // expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("gets github name", () => {
    const engineer = new Engineer("janet2000");

    expect(engineer.getGithub()).toEqual(expect.any(String));
});