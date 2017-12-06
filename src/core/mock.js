// @flow

import type { USER } from './types'
import users from './users.json'

// Emulate fetch returning Promise with resolved data
export const getFilteredUsers = (
  filter: string = '',
  index: number = 0
): Promise<Array<USER>> =>
  new Promise(resolve => {
    const regexps = filter
      .split(' ')
      .map(word => new RegExp(String(word), 'i'))

    const filteredData = users.filter(item =>
      regexps.every(regex =>
        ['firstName', 'lastName', 'email'].some(key =>
          regex.test(item[String(key)]))))

    resolve(filteredData.slice(index, index + 100))
  })
