const Employee = require("./Employee");
// This Manager class extends Enployee class, so we don't need redfine the "shared" properties here
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;