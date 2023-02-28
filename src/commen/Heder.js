import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../helper/Icons/icons'

const Heder = ( ) => {
  return (
    <View style={{height:60,backgroundColor:'#DF7F00',marginBottom:30}}>
       <View style={{flexDirection:'row' ,alignItems:"center",flex:1,justifyContent:'space-around',width:'80%'}}>
        <Image source={icons.back} />
        <Text style={{color:'#fff',fontSize:19}}>Complete Timesheet</Text>

       </View>
    </View>
  )
}

export default Heder

const styles = StyleSheet.create({})