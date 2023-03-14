// import axios from 'axios';
// import React, {Component} from 'react';
// import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
// import {connect, useDispatch} from 'react-redux';
// import {icons} from '../../helper/Icons/icons';
// import { Usersdata } from '../../Redux/action/action';

// class Information extends Component {
//   constructor(props) {
//     console.log('99', props.route.params);
//     super(props);
//     this.state = {
//       users: [],
//       count: 0,
//       textName: props?.route?.params?.name,
//       number: props?.route?.params?.number,
//     };
//   }
//   // componentDidMount(){

//   //   dispatch()
//   // }

//   // try {
//   //   await axios
//   //     .get(`https://dummyjson.com/users`)
//   //     .then(response => this.setState({users: response?.data?.users}));
//   // } catch (error) {
//   //   console.log(error);
//   // }

//   onClikdata = items => {
//     console.log(items);
//     this.setState({textName: items.firstName});
//     this.setState({number: items.phone});
//   };
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }
//   onDeletedate = id => {
//     console.log('onDeletedate');
//     this.setState({
//       users: this.state.users.filter(function (valu) {
//         return valu.id !== id;
//       }),
//     });
//   };
//   onData=()=>{
//     this.props.Usersdata("1");
//   }
//   render() {
//      const {number, textName, users} = this.state;
//     let data = this.props.apiCalll;
//     console.log(data);
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#6096B4',
//           paddingTop: 30,
//         }}>
//         <View
//           style={{
//             backgroundColor: 'rgba(0,0,0,0.3)',
//             height: 100,
//             width: '80%',
//             borderRadius: 10,
//             alignSelf: 'center',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text style={{color: '#fff', fontSize: 20}}>Name :- {textName}</Text>
//           <Text style={{color: '#fff', fontSize: 20}}>Number :- {number}</Text>
//         </View>
//         <FlatList
//           style={{flex: 1}}
//           data={users}
//           //       myContacts.filter(option => text?option?.displayName?.includes(text):option)}
//           renderItem={({item}) => {
//             return (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <TouchableOpacity
//                   onPress={() => this.onClikdata(item)}
//                   style={{
//                     height: 50,
//                     width: '70%',
//                     backgroundColor: '#219F94',
//                     margin: 10,
//                     alignSelf: 'center',
//                     borderRadius: 10,
//                     borderWidth: 1,
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     paddingHorizontal: 10,
//                   }}>
//                   <Text>
//                     Name:-{item.firstName} {item.maidenName} {item.lastName}{' '}
//                     {item.id}
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.onDeletedate(item.id)}>
//                   <Image style={{height: 40, width: 40}} source={icons.trash} />
//                 </TouchableOpacity>
//               </View>
//             );
//           }}
//         />
//         <TouchableOpacity onPress={this.onData()}>
//           <Text>Click</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// function mapStateToProps(state) {
//   console.log(state);
//  // const counter = state.apiCalll;
//   // return {
//   //   counter
//   // };
// }

// export default connect(mapStateToProps)(Information);

// import React, { Fragment, Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Button,
//   Text
// } from 'react-native';

// class Information extends Component {
//   state = { count: 0 };
//   decrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }
//   incrementCount() {
//     let { count } = this.state;
//     count++;
//     this.setState({
//       count
//     })
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <View styles={styles.container}>
//         <Button
//           title="increment"
//           onPress={() => this.incrementCount()}
//         />
//         <Text>{count}</Text>
//         <Button
//           title="decrement"
//           onPress={() => this.decrementCount()}
//         />
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default Information;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
// import {Text, View,TouchableOpacity} from 'react-native';
// import {connect} from 'react-redux';
// import {INCREMENT} from '../../Redux/action/action';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       test: Math.random() * 10,
//     };
//   }

//   handleIncrement() {

//     this.props.INCREMENT();
//   }
//   render() {
//     return (
//       <View>
//         <Text>App</Text>
//         <Text>test: {this.state.test}</Text>
//         <Text>Count: {this.props.count}</Text>
//         {/* <Counter /> */}

//         <TouchableOpacity onPress={() => this.handleIncrement()}>
//         <Text>Increase</Text>
//       </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => {
//    return {
//     count: state.count,
//   };
// };

// const mapDispatchToProps = {
//   INCREMENT,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// //export default connect(null, {INCREMENT})(Counter);
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {incrementTotal} from '../../Redux/action/action';
import {connect} from 'react-redux';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 'kkkkk',
    };
  }

  // increment = () => {
  //   this.props.incrementTotal('INCREMENT');
  //   this.setState({total: 'bhavesh'});
  // };
  // decrement = () => {
  //   this.props.incrementTotal('DECREMENT');
  // };
  // reset = () => {
  //   this.props.incrementTotal('RESET');
  // };
  render() {


     return (
      <View
        style={{
          justifyContent: 'center',

          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => this.increment()}
            style={{padding: 10, backgroundColor: '#8989'}}>
            <Text>Increment</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: '#909', fontWeight: '600'}}>
            {this.props.todoState.count}
          </Text>
          <TouchableOpacity
            onPress={() => this.decrement()}
            style={{padding: 10, backgroundColor: '#8989'}}>
            <Text>Decrement</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.reset()}
          style={{
            padding: 10,
            backgroundColor: '#8989',
            alignSelf: 'center',
            margin: 10,
          }}>
          <Text>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity
       onPress={() => this.props.navigation.navigate('Apicall')}
          style={{
            backgroundColor: '#600099',
            alignItems: 'center',
            alignSelf: 'center',
            padding: 10,
          }}>
          <Text style={{color: '#fff'}}>NEXT API CALL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state) {
  //  console.log('state', state);
  return {
    todoState: state.count,
  };
}
export default connect(mapStateToProps, {incrementTotal})(Information);

const styles = StyleSheet.create({});
