const Intern = require("../lib/Intern");
describe("Intern", () => {
    it("should set school property to new object" , () => {
        const itValue = "CWRU";
        const e = new Intern("Mark", 100,"test@test.com",itValue);
        expect(e.school).toBe(itValue)

    });
    it("should return the school using getSchool() method of that new intern object", () => {
        //Arrange
        const itValue = "CWRU";
        //Act
        const e = new Intern("Mark", 100,"test@test", itValue);
        //Assert
        expect(e.getSchool()).toBe(itValue);
    });
    it("should get the role of the new engineer object using getRole() method", () => {
        const itValue = "Intern";
        const e = new Intern("Mark", 100, "test@test","CWRU", itValue );
        expect(e.getRole()).toBe(itValue);
    });
});