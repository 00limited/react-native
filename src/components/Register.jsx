import React, { useState } from "react";
import { Center, VStack, View, Text, Input, Button } from "native-base";
import img1 from "../assets/login.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = () => {
  let [register, setRegister] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChanges = (title, value) => {
    setRegister({
      ...register,
      [title]: value,
    });
  };
  console.log(register);

  const handleRegister = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(register);

      const res = await axios.post(
        "          https://api.kontenbase.com/query/api/v1/1ca8c461-715d-4cb6-b0e1-560cf0ec35a4/auth/register",
        body,
        config
      );
      if (res) {
        await AsyncStorage.setItem("token", res.data.token);
      }
      const value = await AsyncStorage.getItem("token");
      if (value != null) {
        console.log(value);
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
      alert(error.res.data.message);
    }
  };
  return (
    <View>
      <VStack>
        <Center>
          <View paddingTop={10} pb={3}>
            <img src={img1} alt="" width={286} height={184} />
          </View>
          <View mt={10}>
            <Text
              mx={1}
              width={120}
              height={34}
              style={{
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "25px",
                lineHeight: "34px",
              }}
            >
              Register
            </Text>
            <Input
              mt="5"
              mx="1"
              placeholder="Email"
              name="email"
              onChangeText={(value) => handleChanges("email", value)}
              w="100%"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
              }}
            />
            <Input
              mt="5"
              mx="1"
              placeholder="Full Name"
              name="firstName"
              onChangeText={(value) => handleChanges("firstName", value)}
              w="100%"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
              }}
            />
            <Input
              mt="5"
              mx="1"
              type="password"
              placeholder="Password"
              w="100%"
              name="password"
              onChangeText={(value) => handleChanges("password", value)}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
              }}
            />
            <Button
              mx="1"
              mt="10"
              w="100%"
              h={50}
              colorScheme="danger"
              onPress={handleRegister}
            >
              Register
            </Button>
            <Text mt={2} style={{ textAlign: "center" }}>
              Joined us before ? <span style={{ color: "red" }}>Login</span>
            </Text>
          </View>
        </Center>
      </VStack>
    </View>
  );
};

export default Register;
