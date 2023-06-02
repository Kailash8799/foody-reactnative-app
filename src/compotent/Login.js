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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config";

const Login = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passhide, changepasshide] = useState(true);

  const Loginpage = async () => {
    if (email.length > 5 && password.length > 5) {
      try {
        const docRef = doc(db, "users", "703AIaE4s0GEAvk0GCVi");
        const docrefd = collection(db,'users')
        const aaaa = await getDocs(docrefd);
        aaaa.docs.forEach((dt)=>{
          console.log(dt.data());
        })
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
        await AsyncStorage.setItem("logtoken", email);
        setemail("");
        setpassword("");
        navigation.push("Home");
      } catch (error) {
        console.log(error);
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
              <Text style={style.header_text}>Welcome</Text>
              <Text style={style.header_text}>Back</Text>
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
                  <Text style={style.btntext}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <View style={style.arrrow}>
                <TouchableOpacity onPress={Loginpage}>
                  <AntDesign name="arrowright" size={27} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[style.signupcss]}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Signup");
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
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={style.viewcss}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Forgot");
                  }}
                >
                  <Text style={[style.forgot]}>Forgot Password ?</Text>
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
    marginLeft: 30,
    marginTop: 60,
  },
  passtop: {
    marginTop: 50,
  },
  top: {
    marginTop: 60,
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
    marginTop: 100,
    height: 700,
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

export default Login;
