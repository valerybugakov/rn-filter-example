// @flow

import { StyleSheet } from 'react-native'

export const ITEM_HEIGHT = 72

export default StyleSheet.create({
  item: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    height: ITEM_HEIGHT,
  },
  thumb: {
    width: 42,
    height: 42,
    marginHorizontal: 15,
    left: -5,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
})
