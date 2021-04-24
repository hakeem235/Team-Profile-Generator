const Engineer = require("../lib/Engineer");
it("should set github account property to new object", ()=> {
    const itValue = "GithubUser";
    const e = new Engineer("Tom","12", "test@test", itValue);
    expect(e.github).toBe(itValue);
});

it("should get github username using getGithub() method", ()=> {
    const itValue = "GithubUser";
    const e = new Engineer("Tom","12", "test@test", itValue);
    expect(e.getGithub()).toBe(itValue);
});
it("should get the role of the new engineer object using getRole() method", ()=> {
    const itValue = "Engineer";
    const e = new Engineer("Tom","12", "test@test", itValue);
    expect(e.getRole()).toBe(itValue);
});