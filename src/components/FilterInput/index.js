import React, { PureComponent } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import dismissKeyboard from 'react-native-dismiss-keyboard'

import searchIcon from './images/search.png'
import styles from './styles'

type Props = {
  onReset: () => void,
  onChangeText: (filterText: string) => void,
}

type State = {
  filterText: string,
}

export default class FilterInput extends PureComponent<Props, State> {
  state = {
    filterText: '',
  }

  onChange = filterText => {
    this.setState({ filterText })
    this.props.onChangeText(filterText)
  }

  onReset = () => {
    this.setState({ filterText: '' })
    this.props.onReset()
  }

  render() {
    return (
      <View style={styles.filterContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />

        <TextInput
          value={this.state.filterText}
          onChangeText={this.onChange}
          style={styles.filterInput}
          onSubmitEditing={dismissKeyboard}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          placeholder="Search..."
          placeholderTextColor="#878787"
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={this.onReset} style={styles.cancelButton}>
          <Text style={styles.cancelFilter}>Cancel</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
