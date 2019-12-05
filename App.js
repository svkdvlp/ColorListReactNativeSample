import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Colors
} from 'react-native'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      backgroundColor : '#DDD'
    }
    this.changeColor.bind(this)
  }

  changeColor(backgroundColor){
    this.setState({backgroundColor})
  }

  render() {
    const { backgroundColor } = this.state
    return(
      <View style={[styles.container,{backgroundColor}]}>
        <Text style={styles.button}
          onPress = {() => this.changeColor('red')}>Red</Text>
        <Text style={styles.button}
          onPress = {() => this.changeColor('green')}>Green</Text>
        <View style={styles.row}>
          <View style={styles.sample}/>
          <Text style={styles.text}>Yellow</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    fontSize: 20,
    borderWidth : 2,
    padding: 12,
    margin: 8,
    borderRadius: 10,
    color: 'black',
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sample: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    margin: 5
  },
  text: {
    fontSize : 20,
    color: 'black',
    margin: 5
  }
});
