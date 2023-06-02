import {} from "react-native";
import Start from "./src/compotent/Start";
import Shopkeeper from "./src/compotent/Shopkeeper";
import Customer from "./src/compotent/Customer";
import Login from "./src/compotent/Login";
import Home from "./src/compotent/Home";
import Forgot from "./src/compotent/Forgot";
import Signup from "./src/compotent/Signup";
import Showresult from "./src/compotent/Showresult";
import Searchbar from "./src/compotent/Searchbar";
import Cart from "./src/compotent/Cart";
import Restaurant from "./src/compotent/Restaurant";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const App = () => {
  const Stack = createNativeStackNavigator();
  const [logedin,setlogedin ]= useState(false);
  useEffect(() => {
   async function fetchdata(){
    let token = await AsyncStorage.getItem("logtoken");
    if(token == null){
      setlogedin(false);
    }
    else{
      setlogedin(true);
    }
  }
  fetchdata()
  }, [logedin])
  const add_to_cart = ()=>{
    alert("Hello")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={logedin ? "Start" : "Start"}>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            title: "Welcome",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Showresult"
          component={Showresult}
          options={{
            title: "Showresult",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            add_to_cart:add_to_cart,
            title: "Restaurant",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Cart",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Searchbar"
          component={Searchbar}
          options={{
            title: "Searchbar",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: "Signup",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Shopkeeper"
          component={Shopkeeper}
          options={{
            title: "Shopkeeper",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Customer"
          component={Customer}
          options={{
            title: "Customer",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{
            title: "Forgot",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
