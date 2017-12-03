// @flow

import { StyleSheet } from 'react-native'

export const HEADER_HEIGHT = 50
export const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  headerFooter: {
    width: 100,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  headerContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  footerContainer: {
    borderColor: '#cccccc',
  },

  separator: {
    height: SEPARATOR_HEIGHT,
    backgroundColor: '#c8c7cc',
  },
  itemSeparator: {
    marginLeft: 35,
  },

  emptyPlaceholder: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 14,
  },
})
