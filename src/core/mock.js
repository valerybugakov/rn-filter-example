// @flow

import faker from 'faker'
import type { USER } from './types'

const generateUsers = (count: number): Array<USER> =>
  Array.from({ length: count }).map((item, index) => ({
    key: String(index),
    pressed: false,
    index: index + 1,
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
  }))

export const users = generateUsers(1000)

export const getFilteredUsers = (
  filter: string = '',
  index: number = 0
): Array<USER> => {
  const filterRegex = new RegExp(String(filter), 'i')

  const filteredData = users.filter(item =>
    ['firstName', 'lastName', 'index'].some(key =>
      filterRegex.test(item[String(key)])))

  return filteredData.slice(index, index + 100)
}
