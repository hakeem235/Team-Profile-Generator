const Engineer = require("../lib/Engineer");
test("should set github account property to new object", ()=> {
    const testValue = "GithubUser";
    const e = new Engineer("Alex","12", "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("should get github username using getGithub() method", ()=> {
    const testValue = "GithubUser";
    const e = new Engineer("Alex","12", "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
test("should get the role of the new engineer object using getRole() method", ()=> {
    const testValue = "Engineer";
    const e = new Engineer("Alex","12", "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
});