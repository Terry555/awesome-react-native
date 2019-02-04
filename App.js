import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Alert } from 'react-native';
import Greeting from './Greeting';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  onPressButton(){
    Alert.alert('You pressed the button.')
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Press Me"
            onPress={this.onPressButton}
            />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Press Me"
            onPress={this.onPressButton}
            color="#841584"
            />
        </View>
        <View style={styles.alternativeButtonContainer}>
          <Button
            title="This looks great!"
            onPress={this.onPressButton}
            />
          <Button
            title="OK!"
            onPress={this.onPressButton}
            color="#841584"
            />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
