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
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { db } from "./config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {ActivityIndicator} from 'react-native';
import { Base64 } from 'js-base64';

const Signup = ({ navigation }) => {
  const [uname, setuname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [passhide, changepasshide] = useState(true);
  const [loader, setloader] = useState(false);

  const Signuppage = async () => {
    if (email.length > 5 && password.length > 5) {
      setloader(true)
      try {
        let encode = Base64.encode(password);
        await addDoc(collection(db, "users"), {
          username: uname,
          email: email,
          phone : phone,
          password : encode,
        });
        setemail("");
        setpassword("");
        setphone("");
        setuname("");
        setloader(false)
      } catch (error) {
        console.log(error);
        setloader(false)
      }
      }
  };
  const Changepasshideshow = () => {
    changepasshide(!passhide);
  };

  return (
    <View>
      <View style={{ height: 40, backgroundColor: "#fff" }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground style={{ backgroundColor: "#fff" }}>
          <View style={style.mainview}>
            <View style={style.header}>
              <Text style={style.header_text}>Create</Text>
              <Text style={style.header_text}>Account</Text>
            </View>

            <View style={[style.viewcss, style.top]}>
              <Text style={style.text_style}>Name</Text>
              <TextInput
                style={style.text_input}
                value={uname}
                onChangeText={(cuname) => {
                  setuname(cuname);
                }}
              />
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

            <View style={[style.viewcss, style.top]}>
              <Text style={style.text_style}>Phone Number</Text>
              <TextInput
                style={style.text_input}
                value={phone}
                onChangeText={(cphone) => {
                  setphone(cphone);
                }}
              />
            </View>

            <View style={style.viewcss}>
              <Text style={[style.text_style, style.passtop]}>Password</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TextInput
                  style={style.text_input}
                  value={password}
                  secureTextEntry={passhide}
                  onChangeText={(pass) => {
                    setpassword(pass);
                  }}
                />
                {passhide ? (
                  <Feather
                    disabled={!password}
                    onPress={Changepasshideshow}
                    name="eye"
                    size={24}
                    color="black"
                  />
                ) : (
                  <Feather
                    disabled={!password}
                    onPress={Changepasshideshow}
                    name="eye-off"
                    size={24}
                    color="black"
                  />
                )}
              </View>
            </View>

            <View style={style.btnout}>
              <View>
                <TouchableOpacity>
                  <Text style={style.btntext}>Sign up</Text>
                </TouchableOpacity>
              </View>
              <View style={style.arrrow}>
                {!loader ? <TouchableOpacity onPress={Signuppage}>
                  <AntDesign name="arrowright" size={27} color="#fff" />
                </TouchableOpacity>
                :
                <ActivityIndicator style={{padding:4}} size="small" color="#fff" />  
              }
              </View>
            </View>
            <View style={[style.signupcss]}>
              <View style={style.viewcss}>
                <Text>Already have an account?</Text>
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
  arrrow: {
    borderWidth: 1,
    borderColor: "#41077a",
    backgroundColor: "#41077a",
    borderRadius: 60,
    padding: 5,
  },
  signupcss: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 0,
    marginTop: 60,
  },
  passtop: {
    marginTop: 40,
  },
  top: {
    marginTop: 50,
  },
  text_input: {
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    height: 26,
    borderRadius: 5,
    width: 280,
  },
  viewcss: {
    marginHorizontal: 30,
  },
  text_style: {
    fontSize: 16,
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
    marginTop: 50,
    height: 770,
    marginHorizontal: 10,
    backgroundColor: "#fff",
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
    alignItems: "center",
  },
  forgot: {
    color: "#41077a",
    textDecorationLine: "underline",
  },
});

export default Signup;
