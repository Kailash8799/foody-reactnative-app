import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Start = ({navigation}) => {
  return (
    <View>
      <View style={[style.card]}>
        <View></View>
        <View style={style.btnout}>
          <TouchableOpacity style={style.btn} onPress={()=>{navigation.navigate("Login")}}>
            <Text style={style.btntext}>Shopkeeper</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[style.card]}>
        <View></View>
        <View style={style.btnout}>
          <TouchableOpacity style={style.btn} onPress={()=>{navigation.navigate("Login")}}>
            <Text style={style.btntext}>Customer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  shopkeeper: {

  },
  user: {

  },
  card: {
    borderWidth: 1,
    height: 200,
    marginHorizontal: 40,
    marginTop: 70,
  },
  btn:{
    backgroundColor:'red',
    height:40,
    alignItems:'center',
    width:150,
    justifyContent:'center',
    borderRadius:7
  },
  btnout:{
    position:'absolute',
    bottom:5,
    alignSelf:'center'
  },
  btntext:{
    fontSize:19,
    fontWeight:'bold',
    color:'#fff'
  },
});

export default Start;
