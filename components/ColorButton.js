import React from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native'

const ColorButton = ({backgroundColor, position, onSelect=(defaultVal)=>defaultVal}) => (
  <TouchableHighlight style={styles.button}
    onPress={() => onSelect(backgroundColor, position)}
    underlayColor="orange">
      <View style={styles.row}>
        <View style={[styles.sample,{backgroundColor}]}/>
        <Text style={styles.text}>{backgroundColor}</Text>
      </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    borderWidth : 2,
    padding: 12,
    margin: 8,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sample: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: 'white',
    margin: 5
  },
  text: {
    fontSize : 22,
    color: 'black',
    margin: 5
  }
});

export default ColorButton
