// @flow

import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import Spindicator from 'components/Spindicator'

import SeparatorComponent from './Separator'
import styles from './styles'

export { HEADER_HEIGHT } from './styles'

type Props = {
  scrollPos: {
    interpolate: (config: Object) => void
  }
}

export default class HeaderComponent extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.headerContainer}>

        <View style={styles.headerFooter}>
          <Text style={styles.headerTitle}>Users</Text>
          <Spindicator value={this.props.scrollPos} />
        </View>

        <SeparatorComponent />
      </View>
    )
  }
}
