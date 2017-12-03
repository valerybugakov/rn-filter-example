import { getFilteredUsers, users as allUsers } from './mock'

describe('getFilteredUsers', () => {
  it('retrun 100 users by default', () => {
    const users = getFilteredUsers()
    const user = users[0]

    expect(users.length).toBe(100)

    expect(user).toHaveProperty('key')
    expect(user).toHaveProperty('pressed')
    expect(user).toHaveProperty('index')
    expect(user).toHaveProperty('firstName')
    expect(user).toHaveProperty('lastName')
  })

  it('filters users with provided string', () => {
    const users = getFilteredUsers('333')

    expect(users.length).toBe(1)
    expect(users[0].index).toBe(333)
  })

  it('slices users from provided index', () => {
    const users = getFilteredUsers('', 100)

    expect(users).toEqual(allUsers.slice(100, 200))
  })
})
