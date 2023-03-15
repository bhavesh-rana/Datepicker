// import {Text, View} from 'react-native';
// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {Usersdata,getUserFetch} from '../../Redux/action/action';

// class Apicallclassbaseredux extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }
//   componentDidMount() {
//     this.props.getUserFetch();
//   }
//   render() {
//      return (
//       <View>
//         <Text>Apicallclassbaseredux</Text>
//         {/* {this.props.apiData?.map((val,index)=>{
//             return(
//                 <View key={index}>
//                     <Text>{val.email}</Text>
//                 </View>
//             )
//         })} */}
//       </View>
//     );
//   }
// }

// function mapStateToProps(state) {
//    console.log('state', state);
//     return {
//         apiData: state,
//     };
//   }

// export default connect(mapStateToProps, {getUserFetch})(Apicallclassbaseredux);
// //   export default connect(mapStateToProps, {incrementTotal})(Information);

import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserFetch} from '../../Redux/action/action';

export default function Apicallclassbaseredux() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFetch());
  }, []);

  const data = useSelector(state => state.Apicallinsagas);
  console.log('7');

  function* demo() {
 
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  
  }
  const gen = demo();
  console.log(demo()); 
  console.log(gen.next());  
  console.log(gen.next()); 
  console.log(gen.next());  

  return (
    <View>
      <FlatList
        data =   {data?.users}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.firstName}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
