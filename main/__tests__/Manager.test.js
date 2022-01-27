const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('initialization', () => {
        it('should set officeNumber via constructor', () => {
            const officeNumber = 46
            const obj = new Manager(undefined, undefined, undefined, officeNumber)
            expect(obj.getOfficeNumber()).toBe(officeNumber)
        })
        it('should return role as Manager', () => {
            const role = 'Manager'
            const obj = new Manager(undefined)
            expect(obj.getRole()).toEqual(role)
        })
    })
})