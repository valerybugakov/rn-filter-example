import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import dismissKeyboard from 'react-native-dismiss-keyboard'

import styles from './styles'

type Props = {
  onReset: () => void,
  onChangeText: (filterText: string) => void
};

type State = {
  filterText: string
};

export default class FilterInput extends PureComponent<Props, State> {
  state = {
    filterText: '',
  };

  onChange = filterText => {
    this.setState({ filterText })
    this.props.onChangeText(filterText)
  };

  onReset = () => {
    this.setState({ filterText: '' })
    this.props.onReset()
  };

  render() {
    return (
      <View style={styles.filterContainer}>
        <MaterialIcons name="search" size={24} style={styles.searchIcon} />

        <TextInput
          value={this.state.filterText}
          onChangeText={this.onChange}
          style={styles.filterInput}
          onSubmitEditing={dismissKeyboard}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          placeholder="search"
          placeholderTextColor="#9e9e9e"
          underlineColorAndroid="transparent"
        />
      </View>
    )
  }
}
