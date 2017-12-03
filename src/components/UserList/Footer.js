// @flow

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import SeparatorComponent from './Separator'
import styles from './styles'

export default class FooterComponent extends PureComponent<{}> {
  render() {
    return (
      <View style={styles.footerContainer}>
        <SeparatorComponent />

        <View style={styles.headerFooter}>
          <Text>The end ❤️</Text>
        </View>
      </View>
    )
  }
}
