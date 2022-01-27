const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('initialization', () => {
        it('should set name via constructor method', () => {
            const name = 'Michael';
            const obj = new Employee(name, undefined, undefined);
            expect(obj.getName()).toBe(name);
        })
        it('should set id via constructor method', () => {
            const id = 325;
            const obj = new Employee(undefined, id, undefined)
            expect(obj.getId()).toBe(id)
        })
        it('should set email via constructor', () => {
            const email = 'michaelklein1997@gmail.com';
            const obj = new Employee(undefined, undefined, email);
            expect(obj.getEmail()).toBe(email);
        })
        it('should return role as Employee', () => {
            const role = 'Employee'
            const obj = new Employee(undefined, undefined, undefined)
            expect(obj.getRole()).toEqual(role)
        })
        it('should capitalize the first letter of the inputted name', () => {
            const name = 'michael'
            const obj = new Employee(name)
            expect(obj.getName()).toEqual('Michael')
        })
    })
})