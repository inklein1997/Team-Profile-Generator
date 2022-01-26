const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('initialization', () => {
        it('should set github username via constructor', () => {
            const officeNumber = 46
            const obj = new Manager(officeNumber)
            expect(obj.officeNumber).toBe(officeNumber)
        })
        it('should return role as Manager', () => {
            const role = 'Manager'
            const obj = new Manager(undefined)
            expect(obj.getRole()).toEqual(role)
        })
    })
})