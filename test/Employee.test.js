const Employee = require("../lib/Employee");
describe("Employee", () => {
    describe("Initialization", () => {
        it("is a base class instantiate Employee instance", () => {
            // Arrange
            const e = new Employee("Tom");
            //Assert
            expect(typeof (e)).toBe("object");
        });
        it("should set the name property via constructor as argument", () => {
        const name = "Mark";
        const e = new Employee(name);
        expect(e.name).toBe(name);
        });

        it("should set the id property via constructor as argument", () => {
            //Arrange 
            const itId = 29;
            // Act
            const e = new Employee("Ahmed",itId);
            // Assert
            expect(e.id).toBe(itId);
        });
        
        it("should set the email property via constructor as argument", () => {
            //Arrange 
            const itEmail = "test@test";
            const e = new Employee("Ahmed",100,itEmail);
            // Assert
            expect(e.email).toBe(itEmail);
        });

    });
    describe("getName", () => {
        it("should return the name using getName() method", () => {
            const itValue = "Ahmed";
            const e = new Employee(itValue);
            expect(e.getName()).toBe(itValue);
        });
    });
    describe("getId", () => {
        it("should return the id using getId() method", () => {
            const itValue = 20;
            const e = new Employee("Ahmed", itValue);
            expect(e.getId()).toBe(itValue);
        });
    });
    describe("getEmail", () => {
        it("should return the email using getEmail() method", () => {
            const itValue = "test@test";
            const e = new Employee("Ahmed", 100, itValue);
            expect(e.getEmail()).toBe(itValue);
        });
    });
    describe("getRole", () => {
        it("should return the role of the instance objects using getRole() method ", () => {
            // Arrange
            const itValue = "Employee";
            // Act
            const e = new Employee("Ahmed", 100, "test@test", itValue);
            // Assert
            expect(e.getRole()).toBe(itValue);
        });
    });

});