import React from 'react'
import {
  FlatList,
  StyleSheet,
  ToastAndroid
} from 'react-native'

import ColorButton from './components/ColorButton'
import ListHeader from './components/ListHeader'
import { DATA } from './util/AppData'

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      listData: DATA,
      backgroundColor : '#DDD'
    }
    this.changeColor.bind(this)
  }

  changeColor(backgroundColor, position){
    this.setState({backgroundColor})
    ToastAndroid.show('Current position is ' + position, ToastAndroid.SHORT);
  }

  render() {
    const { backgroundColor, listData } = this.state
    return(
      <FlatList style={[styles.container,{backgroundColor}]}
          data={listData}
          ListHeaderComponent={<ListHeader title='Color List'/>}
          renderItem={
            ({ item, index }) =>
            <ColorButton backgroundColor={item.colorVal}
                          position={index}
                          onSelect={(color,position) => this.changeColor(color,position)} />
          }
          keyExtractor={item => item.id}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
