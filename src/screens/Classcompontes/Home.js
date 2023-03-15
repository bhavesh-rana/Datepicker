import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: '',
    };
  }
  componentWillUnmount(){ 
    console.log("componentWillUnmount");
   }
  changescreen = () => {
    this.props.navigation.navigate('Information', {
      name: this.state.name,
      number: this.state.number,
    });
  };
  render() {

    return (
      <View style={styles.container}>
        {/* <Text> {this.state.name}</Text> */}
        <TextInput
          placeholder="Enter name"
          value={this.state.name}
          onChangeText={value => this.setState({name: value})}
          style={styles.textInputcontainer}
        />
        <TextInput
          placeholder="Enter number"
          value={this.state.number}
          onChangeText={value => this.setState({number: value})}
          style={styles.textInputcontainer}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(94, 93, 240, 1)',
            padding: 15,
            borderRadius: 10,
          }}
          onPress={this.changescreen}>
          <Text style={{color: '#fff'}}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6096B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputcontainer: {
    height: 50,
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.6)',
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 10,
  },
});

export default Home;
