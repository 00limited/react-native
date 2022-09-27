import React from "react";
import { View, Text } from "react-native";
import { Center, VStack, Button } from "native-base";
import img1 from "../assets/logo.png";
import img2 from "../assets/logoWays.png";

const Home = ({ navigation }) => {
  return (
    <View>
      <VStack space={2} justifyContent="center">
        <Center>
          <View style={{ top: "59px" }}>
            <img
              src={img1}
              alt=""
              style={{ width: "290px", height: "300px" }}
            />
            <View style={{ position: "absolute", left: "40px", top: "260px" }}>
              <img
                src={img2}
                alt=""
                style={{ width: "192px", height: "48px" }}
              />
            </View>
            <View
              style={{
                top: "30px",
                width: "224px",
                height: "32px",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Write your activity and finish your activity. Fast, Simple and
                Easy to Use
              </Text>
            </View>
          </View>
          <View style={{ top: "168px" }}>
            <Button
              w={310}
              h={50}
              colorScheme="danger"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>
            <Button
              w={310}
              h={50}
              colorScheme="gray"
              marginTop={5}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Button>
          </View>
        </Center>
      </VStack>
    </View>
  );
};

export default Home;
