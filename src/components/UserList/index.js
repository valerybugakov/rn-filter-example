// @flow

import React, { PureComponent } from 'react'
import {
  Animated,
  FlatList,
  View,
} from 'react-native'
import debounce from 'lodash.debounce'

import type { USER } from 'core'
import { getFilteredUsers } from 'core'

import FilterInput from 'components/FilterInput'
import UserItem, { ITEM_HEIGHT } from 'components/UserItem'

import EmptyPlaceholder from './Placeholder'
import Separator, { SEPARATOR_HEIGHT } from './Separator'
import Header, { HEADER_HEIGHT } from './Header'
import Footer from './Footer'

import styles from './styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

type State = {
  filterText: string,
  data: Array<USER>,
}

export default class UserList extends PureComponent<{}, State> {
  state = {
    filterText: '',
    data: getFilteredUsers(),
  };

  scrollPos = new Animated.Value(0);

  scrollSinkY = Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollPos } } }]);

  getItemLayout = (data: any, index: number) => ({
    length: ITEM_HEIGHT,
    index,
    offset: ((ITEM_HEIGHT + SEPARATOR_HEIGHT) * index) + HEADER_HEIGHT,
  })

  onSearch = (filterText: string) => this.setState({
    filterText,
    data: getFilteredUsers(filterText),
  });

  onResetFilterText = () => this.onSearch('')

  onSearchDebounced = debounce(this.onSearch, 250, { trailing: true });

  onEndReached = () => {
    if (this.state.data.length >= 1000) {
      return
    }

    this.setState(({ data }) => ({
      data: data.concat(getFilteredUsers(this.state.filterText, data.length)),
    }))
  };

  // eslint-disable-next-line no-console
  onRefresh = () => console.log('onRefresh: nothing here :P');

  onItemPress = (key: string) => {
    const index = Number(key)
    const pressed = !this.state.data[index].pressed

    // Mutating item only on the client
    this.setState((state) => {
      const data = [...state.data]

      data[index] = {
        ...state.data[index],
        pressed,
        title: `Item ${key} ${pressed ? '(pressed)' : ''}`,
      }

      return { data }
    })
  }

  renderSeparator = () => (
    <Separator style={styles.itemSeparator} />
  )

  renderHeader = () => (
    <FilterInput
      onReset={this.onResetFilterText}
      onChangeText={this.onSearchDebounced}
    />
  )

  renderItem = ({ item }: { item: USER }) => (
    <UserItem
      item={item}
      onPress={this.onItemPress}
    />
  );

  render() {
    const { data } = this.state

    return (
      <View style={styles.container}>
        <Header scrollPos={this.scrollPos} />
        <AnimatedFlatList
          data={data}
          getItemLayout={this.getItemLayout}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={data.length ? Footer : EmptyPlaceholder}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          refreshing={false}
          onScroll={this.scrollSinkY}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
