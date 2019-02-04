import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Greeting extends React.Component {

  render() {

    return (
      <View>
      <Text style={this.props.style}>Hey what's up {this.props.name}??</Text>
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   text: {
//     fontSize: 25
//   }
// });
