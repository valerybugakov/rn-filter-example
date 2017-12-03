// @flow

import React, { PureComponent } from 'react'
import {
  TouchableHighlight,
  Text,
  View,
  Image,
} from 'react-native'

import type { USER } from 'core'
import { hashCode } from 'utils'

import styles from './styles'

const THUMB_URLS = [
  require('./images/man-0.png'),
  require('./images/man-1.png'),
  require('./images/man-2.png'),
  require('./images/man-3.png'),
  require('./images/man-4.png'),
]

export { ITEM_HEIGHT } from './styles'

type Props = {
  item: USER,
  onPress: (key: string) => void,
}

export default class UserItem extends PureComponent<Props> {
  onPress = () => {
    this.props.onPress(this.props.item.key)
  };

  render() {
    const {
      item: {
        firstName,
        lastName,
        index,
        pressed,
      },
    } = this.props

    const itemHash = Math.abs(hashCode(firstName + lastName))
    const imgSource = THUMB_URLS[itemHash % THUMB_URLS.length]

    return (
      <TouchableHighlight onPress={this.onPress} style={styles.item}>

        <View style={styles.row}>
          <Image style={styles.thumb} source={imgSource} />

          <Text style={styles.text} numberOfLines={3}>
            {index} {firstName} {lastName} {pressed && '-pressed-'}
          </Text>
        </View>

      </TouchableHighlight>
    )
  }
}
