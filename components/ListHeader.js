import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const ListHeader = ({title}) => (
  <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'lightblue',
    padding: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'salmon',
    margin: 8
  },
});

export default ListHeader
