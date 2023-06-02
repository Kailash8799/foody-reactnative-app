import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons'; 

const Login = ({ navigation }) => {
  const [email, setemail] = useState("");

  return (
    <View>
      <View style={{height:40,backgroundColor:'#fff'}}></View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground style={{backgroundColor:'#fff'}}>
      <View style={style.mainview}>
        <View style={style.header}>
          <Text style={style.header_text}>Forgot</Text>
          <Text style={style.header_text}>Your Password</Text>
        </View>
        <View style={[style.viewcss, style.top]}>
          <Text style={style.text_style}>Email</Text>
          <TextInput
            style={style.text_input}
            value={email}
            onChangeText={(emailval) => {
              setemail(emailval);
            }}
          />
        </View>

        <View style={style.btnout}>
          <View>
            <TouchableOpacity>
              <Text style={style.btntext}>Forgot</Text>
            </TouchableOpacity>
          </View>
          <View style={style.arrrow}>
          <TouchableOpacity>
            <AntDesign name="arrowright" size={27} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[style.signupcss]}>
              <View style={style.viewcss}>
                <Text>Already know password?</Text>
              </View>
              <View style={{ marginRight: 30 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text
                    style={[
                      {
                        color: "#41077a",
                        textDecorationLine: "underline",
                      },
                    ]}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
      </View>
      </ImageBackground>
    </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  arrrow:{
    borderWidth:1,
    borderColor:'#41077a',
    backgroundColor:'#41077a',
    borderRadius:60,
    padding:5
  },
  signupcss: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 0,
    marginTop: 60,
  },
  top: {
    marginTop: 60,
  },
  text_input: {
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    height: 30,
  },
  viewcss: {
    marginHorizontal: 30,
  },
  text_style: {
    fontSize: 19,
    color: "#41077a",
  },
  header: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  header_text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#41077a",
  },
  mainview: {
    marginTop: 100,
    height: 700,
    marginHorizontal: 10,
    backgroundColor:'#fff'
  },
  btntext: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#41077a",
  },
  btnout: {
    marginTop: 50,
    marginHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
});

export default Login;
