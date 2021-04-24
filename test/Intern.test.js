const Intern = require("../lib/Intern");
describe("Intern", () => {
    it("should set school property to new object" , () => {
        const itValue = "CWRU";
        const e = new Intern("Sarah", 100,"it@it.com",itValue);
        expect(e.school).toBe(itValue)

    });
    it("should return the school using getSchool() method of that new intern object", () => {
        //Arrange
        const itValue = "CWRU";
        //Act
        const e = new Intern("Sarah", 100,"it@it.com", itValue);
        //Assert
        expect(e.getSchool()).toBe(itValue);
    });
    it("should get the role of the new engineer object using getRole() method", () => {
        const itValue = "Intern";
        const e = new Intern("Sarah", 100, "it@gmail.com","CWRU", itValue );
        expect(e.getRole()).toBe(itValue);
    });
});