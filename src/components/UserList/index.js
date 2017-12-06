// @flow

import React, { PureComponent } from 'react'
import { Animated, FlatList, View } from 'react-native'
import debounce from 'lodash.debounce'

import type { USER } from 'core'
import { getFilteredUsers } from 'core'

import FilterInput from 'components/FilterInput'
import ActionButton from 'components/ActionButton'
import UserItem, { ITEM_HEIGHT } from 'components/UserItem'

import Header from './Header'
import Separator, { SEPARATOR_HEIGHT } from './Separator'

import styles from './styles'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

type State = {
  filterText: string,
  data: Array<USER>
};

export default class UserList extends PureComponent<{}, State> {
  state = {
    filterText: '',
    data: [],
  };

  componentDidMount() {
    this.getUsers()
  }

  async getUsers(filterText?: string, index?: number, data?: Array<USER>) {
    const users = await getFilteredUsers(filterText, index)

    this.setState({ data: (data || []).concat(users) })
  }

  getItemLayout = (data: any, index: number) => ({
    length: ITEM_HEIGHT,
    index,
    offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
  });

  onSearch = (filterText: string) => {
    this.setState({ filterText })
    this.getUsers(filterText)
  };

  onResetFilterText = () => this.onSearch('');

  onSearchDebounced = debounce(this.onSearch, 250, { trailing: true });

  onEndReached = () => {
    const { data } = this.state

    if (data.length >= 1000) {
      return
    }

    this.getUsers(this.state.filterText, data.length, data)
  };

  renderSeparator = () => <Separator style={styles.itemSeparator} />;

  renderItem = ({ item }: { item: USER }) => <UserItem item={item} />;

  render() {
    const { data } = this.state

    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.userList}>
          <FilterInput
            onReset={this.onResetFilterText}
            onChangeText={this.onSearchDebounced}
          />
          <AnimatedFlatList
            data={data}
            getItemLayout={this.getItemLayout}
            ItemSeparatorComponent={this.renderSeparator}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="always"
            onRefresh={this.getUsers}
            onEndReached={this.onEndReached}
            refreshing={false}
            renderItem={this.renderItem}
          />
        </View>

        <ActionButton />
      </View>
    )
  }
}
