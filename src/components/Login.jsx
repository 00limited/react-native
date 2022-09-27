import React from "react";
import { Center, VStack, View, Text, Input, Button } from "native-base";
import img1 from "../assets/login.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const handleChanges = (title, value) => {
    setLogin({
      ...login,
      [title]: value,
    });
  };
  const handlelogin = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const body = JSON.stringify(login);
      setIsLogin(true);
      const res = await axios.post(
        "https://api.kontenbase.com/query/api/v1/1ca8c461-715d-4cb6-b0e1-560cf0ec35a4/auth/login",
        body,
        config
      );
      console.log(res);
      setIsLogin(false);
      if (res) {
        await AsyncStorage.setItem("token", res.data.token);
      }
      const value = await AsyncStorage.getItem("token");
      if (value != null) {
        console.log(value);
        navigation.navigate("Dashboard");
      }
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <VStack space={2} justifyContent="center">
        <Center>
          <View paddingTop={10} pb={5}>
            <img src={img1} alt="" width={286} height={184} />
          </View>
          <View mt={10}>
            <Text
              mx={1}
              width={86}
              height={34}
              style={{
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "25px",
                lineHeight: "34px",
              }}
            >
              Login
            </Text>
            <Input
              mt="5"
              mx="1"
              placeholder="Email"
              w="100%"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
              }}
              onChangeText={(value) => handleChanges("email", value)}
            />
            <Input
              mt="5"
              mx="1"
              placeholder="Password"
              w="100%"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
              }}
              onChangeText={(value) => handleChanges("password", value)}
            />
            <Button
              mx="1"
              mt="10"
              w="100%"
              h={50}
              colorScheme="danger"
              onPress={handlelogin}
            >
              Login
            </Button>
            <Text mt={2} style={{ textAlign: "center" }}>
              New Users ? <span style={{ color: "red" }}>Register</span>
            </Text>
          </View>
        </Center>
      </VStack>
    </View>
  );
};

export default Login;
