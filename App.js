import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import Home from "./src/components/Home";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import ListTodo from "./src/components/ListTodo";
import AddCategory from "./src/components/AddCategory";
import AddList from "./src/components/AddList";
import DetailList from "./src/components/DetailList";

import Root from "./src/rooter/Root";

export default function App() {
  return (
    <NativeBaseProvider>
      <Root />
    </NativeBaseProvider>
  );
}
