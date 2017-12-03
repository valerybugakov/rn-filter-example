// @flow

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import UserList from 'components/UserList'

import styles from './styles'

export default class UserSearch extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <UserList />
      </View>
    )
  }
}
