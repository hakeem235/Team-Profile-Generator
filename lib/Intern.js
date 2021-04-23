const Employee = require("./Employee");
// This Intern class extends Enployee class, so we don't need redfine the "shared" properties here
class Intern extends Employee{
    // constructor initialize the new intern objects and pass the properties as an arguments both shared and specific for that class.
    constructor(name, id, email, school){
        super(name, id,email)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;