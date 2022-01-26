const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('initialization', () => {
        it('should set github username via constructor', () => {
            const github = 'inklein1997'
            const obj = new Engineer(github)
            expect(obj.getGithub()).toBe(github)
        })
        it('should return role as Engineer', () => {
            const role = 'Engineer'
            const obj = new Engineer(undefined)
            expect(obj.getRole()).toEqual(role)
        })
    })
})