import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NavRoot from "./NavRoot";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ListTodo from "../components/ListTodo";
import DetailList from "../components/DetailList";
import AddCategory from "../components/AddCategory";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={NavRoot}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TodoList" component={ListTodo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Details" component={DetailList} />
        <Stack.Screen name="Detail" component={AddCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});
