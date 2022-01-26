const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('initialization', () => {
        it('should set school name via constructor', () => {
            const school = 'University of Texas'
            const obj = new Intern(school)
            expect(obj.getSchool()).toBe(school)
        })
        it('should return role as Intern', () => {
            const role = 'Intern'
            const obj = new Intern()
            expect(obj.getRole()).toEqual(role)
        })
    })
})