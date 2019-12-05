import React from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'

import ColorButton from './components/ColorButton'

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
      <ScrollView style={[styles.container,{backgroundColor}]}>
          <ColorButton backgroundColor="red"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="green"
              onSelect={(c) => this.changeColor(c)}/>
          <ColorButton backgroundColor="yellow"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="blue"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="red"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="rgba(255,255,255,0.8)"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="red"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="green"
              onSelect={(c) => this.changeColor(c)}/>
          <ColorButton backgroundColor="yellow"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="blue"
              onSelect={(color) => this.changeColor(color)}/>
          <ColorButton backgroundColor="red"
              onSelect={(color) => this.changeColor(color)}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 8
  }
});
