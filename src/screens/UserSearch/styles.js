// @flow

import { StyleSheet, StatusBar, Platform } from 'react-native'

import { isIphoneX } from 'utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: isIphoneX ? 30 : 0,

    paddingTop: Platform.select({
      ios: isIphoneX ? 30 : 18,
      android: StatusBar.currentHeight,
    }),
  },
  wrapper: {
    flex: 1,
  },
})
