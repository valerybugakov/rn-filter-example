// @flow

import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    backgroundColor: 'white',
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemSeparator: {
    marginLeft: 35,
  },

  filterContainer: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f7',
  },
  searchIcon: {
    top: 9,
    position: 'absolute',
    marginLeft: 12,
    tintColor: '#179be5',
  },
  spinnerIcon: {
    marginLeft: 15,
    position: 'absolute',
    alignSelf: 'center',
    tintColor: '#179be5',
  },
  filterInput: {
    paddingLeft: 44,
    marginVertical: Platform.select({ ios: 8, android: 0 }),
    marginRight: 24,
    fontSize: 14,
    flex: 1,
  },
  cancelButton: {
    height: 44,
    justifyContent: 'center',
  },
  cancelFilter: {
    paddingRight: 16,
    color: '#878787',
    fontSize: 14,
  },
})
