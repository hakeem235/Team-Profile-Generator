const Manager = require("../lib/Manager");
describe("Manager", () => {
    it("should set officeNumber property to new object via constructor" , () => {
        const itValue = 124;
        const e = new Manager("Ahmed", 100,"test@test.com",itValue);
        expect(e.officeNumber).toBe(itValue);

    });
    it("Can get office Number via getOfficeNumber()", () => {
        const itValue = 124;
        const e = new Manager("Ahmed", 100, "test@test.com", itValue);
        expect(e.getOfficeNumber()).toBe(itValue);
    });
    it("should get the role of the new engineer object using getRole() method", () => {
        const itValue = "Manager";
        const e = new Manager("Ahmed", 100, "test@test.com", 124, itValue);
        expect(e.getRole()).toBe(itValue);
    });
});
