const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('initialization', () => {
        //Positive Test
        it('should set name via constructor method', () => {
            const name = 'Michael';
            const obj = new Employee(name);
            expect(obj.getName()).toBe(name);
        })
        //Exception Test
        // it('should throw an error if name is not a string', () => {
        //     const name = 11
        //     const obj = () => new Employee(name , 16, 'email') 
        //     const err = obj.getName()
        //     expect(obj).toThrow(err)
        // })
        //Positive Test
        it('should set id via constructor method', () => {
            const id = 325;
            const obj = new Employee(undefined, id, undefined)
            expect(obj.getId()).toBe(id)
        })
        //Exception Test
        // it('should throw an error if id is not a number', () => {
        //     const id = 'threetwentyfive';
        //     const obj = new Employee(id);
        //     const err = obj.getId();
        //     expect(obj).toThrow(err)
        // })
        it('should set email via constructor', () => {
            const email = 'michaelklein1997@gmail.com';
            const obj = new Employee(undefined, undefined, email);
            expect(obj.getEmail()).toBe(email);
        })
        // it('should throw an an error if email does not end in .com, org, or .edu', () => {
        //     const email = 'invalidEmail';
        //     const obj = new Employee(undefined, undefined, email);
        //     const err = obj.getEmail()
        //     expect(obj).toThrow(err)
        // })
    })
})