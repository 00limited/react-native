import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTodo from "../components/ListTodo";
import AddCategory from "../components/AddCategory";
import AddList from "../components/AddList";

const Tab = createBottomTabNavigator();

function NavRoot() {
  return (
    <Tab.Navigator
      initialRouteName="ListTodo"
      screenOptions={{
        tabBarActiveTintColor: "red",
        header: () => null,
      }}
    >
      <Tab.Screen
        name="ListTodo"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-text-multiple"
              color={color}
              size={size}
            />
          ),
        }}
        component={ListTodo}
      />
      <Tab.Screen
        name="Category"
        options={{
          tabBarLabel: "Add Category",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-sharp" color={color} size={size} />
          ),
        }}
        component={AddCategory}
      />
      <Tab.Screen
        name="Todo"
        options={{
          tabBarLabel: "Add Todo",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="duplicate" color={color} size={size} />
          ),
        }}
        component={AddList}
      />
    </Tab.Navigator>
  );
}

export default NavRoot;
