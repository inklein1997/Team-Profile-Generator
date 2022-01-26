class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        if(typeof this.name !== 'string') {
            return 'Name is not a string'
        }
        return this.name
    }
    getId() {
        if(typeof this.id !== 'number') {
            return 'ID is not a number'
        }
        return this.id
    }
    getEmail() {
        if(!this.email.endsWith('.com' || '.org' || '.edu' || '.gov')) {
            return 'Email is not valid'
        }
        return this.email
    }
    getRole() {
        return 'employee'
    }
}

module.exports = Employee