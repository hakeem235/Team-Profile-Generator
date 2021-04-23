class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        if(typeof name !== "string" || !name.trim().length){
            throw new Error ("Expected 'name' property not to be empty string");
        }
    }
    getName() {
        // console.log(`Employee Name is ${this.name}`);
        return this.name;
    }
    getId() {
        // console.log(`This employee has an id of ${this.id}`);
        return this.id;
    }
    getEmail() {
        // console.log(`Employee email: ${this.email}`);
        return this.email;
    }
    getRole(){
        // cpnsole.log(`Employee Role: ${this.getRole}`);
        return "Employee";
    }
}
module.exports = Employee;