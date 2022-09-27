import React, { useContext } from "react";
import {
  View,
  Text,
  Input,
  Center,
  VStack,
  HStack,
  Pressable,
  ScrollView,
} from "native-base";
import img1 from "../assets/profil.jpg";
import img2 from "../assets/Vector.png";
import { AntDesign } from "@expo/vector-icons";
// import UserContext from "../context/userContext";

const ListTodo = ({ navigation }) => {
  // const [state] = useContext(UserContext);

  return (
    <ScrollView>
      <Center>
        <VStack>
          <View>
            <View
              mx="auto"
              style={{
                paddingTop: "10px",
                display: "flex",
                flexDirection: "row",
                width: "350px",
                height: "80px",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: "25px",
                    lineHeight: "34px",
                    paddingLeft: "10px",
                  }}
                >
                  Hi <span>Fadil</span>
                </Text>
                <Text
                  w="auto"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "16px",
                    paddingLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  200 List
                </Text>
              </View>
              <View
                mx={2}
                style={{
                  marginLeft: "8px",
                  height: "60px",
                  width: "60px",
                  borderRadius: "40px",
                }}
              >
                <img
                  src={img1}
                  alt=""
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "40px",
                  }}
                />
              </View>
            </View>
            <View mt={6}>
              <Input
                mx="auto"
                placeholder="Search List...."
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                  width: "350px",
                  height: "40px",
                }}
              />
            </View>
            <View
              mt={2}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Input
                style={{ width: "110px", height: "40px" }}
                placeholder="Date"
              />
              <Input
                style={{ width: "110px", height: "40px" }}
                placeholder="Category"
              />
              <Input
                style={{ width: "110px", height: "40px" }}
                placeholder="Status"
              />
            </View>
          </View>
          <Pressable
            mt={5}
            px={2}
            style={{
              width: "350px",
              height: "110px",
              backgroundColor: "#FFEFEF",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() => navigation.navigate("Details")}
          >
            <View mt={2} mb={2} justifyContent="space-between">
              <Text
                style={{
                  width: "85px",
                  height: "16px",
                  fontWeight: "800",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Study Golang
              </Text>
              <Text
                style={{
                  marginTop: "5px",
                  width: "217px",
                  height: "27px",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                Learn Golang to improve fundamentals and familiarize with
                coding.
              </Text>
              <Text
                style={{
                  marginTop: "20px",
                  width: "70px",
                  height: "11px",
                  fontWeight: "400",
                  fontSize: "8px",
                  display: "flex",
                }}
              >
                <AntDesign name="calendar" color="black" />
                19 July 2022
              </Text>
            </View>
            <View>
              <View
                mt={2}
                style={{
                  width: "50px",
                  height: "20px",
                  backgroundColor: "#81C8FF",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Study
                </Text>
              </View>
              <View
                mt={5}
                style={{
                  marginLeft: "8px",
                  height: "30px",
                  width: "30px",
                  borderRadius: "40px",
                }}
              >
                <img
                  src={img2}
                  alt=""
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "40px",
                  }}
                />
              </View>
            </View>
          </Pressable>
          <View
            mt={5}
            px={2}
            style={{
              width: "350px",
              height: "110px",
              backgroundColor: "#FEFFDA",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View mt={2} mb={2} justifyContent="space-between">
              <Text
                style={{
                  width: "85px",
                  height: "16px",
                  fontWeight: "800",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Study Golang
              </Text>
              <Text
                style={{
                  marginTop: "5px",
                  width: "217px",
                  height: "27px",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                Learn Golang to improve fundamentals and familiarize with
                coding.
              </Text>
              <Text
                style={{
                  marginTop: "20px",
                  width: "70px",
                  height: "11px",
                  fontWeight: "400",
                  fontSize: "8px",
                  display: "flex",
                }}
              >
                <AntDesign name="calendar" color="black" />
                19 July 2022
              </Text>
            </View>
            <View>
              <View
                mt={2}
                style={{
                  width: "50px",
                  height: "20px",
                  backgroundColor: "#81C8FF",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Study
                </Text>
              </View>
              <View
                mt={5}
                style={{
                  marginLeft: "8px",
                  height: "30px",
                  width: "30px",
                  borderRadius: "40px",
                }}
              >
                <img
                  src={img2}
                  alt=""
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "40px",
                  }}
                />
              </View>
            </View>
          </View>
          <View
            mt={5}
            px={2}
            style={{
              width: "350px",
              height: "110px",
              backgroundColor: "yellow",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View mt={2} mb={2} justifyContent="space-between">
              <Text
                style={{
                  width: "85px",
                  height: "16px",
                  fontWeight: "800",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Study Golang
              </Text>
              <Text
                style={{
                  marginTop: "5px",
                  width: "217px",
                  height: "27px",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                Learn Golang to improve fundamentals and familiarize with
                coding.
              </Text>
              <Text
                style={{
                  marginTop: "20px",
                  width: "70px",
                  height: "11px",
                  fontWeight: "400",
                  fontSize: "8px",
                  display: "flex",
                }}
              >
                <AntDesign name="calendar" color="black" />
                19 July 2022
              </Text>
            </View>
            <View>
              <View
                mt={2}
                style={{
                  width: "50px",
                  height: "20px",
                  backgroundColor: "#81C8FF",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Study
                </Text>
              </View>
              <View
                mt={5}
                style={{
                  marginLeft: "8px",
                  height: "30px",
                  width: "30px",
                  borderRadius: "40px",
                }}
              >
                <img
                  src={img2}
                  alt=""
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "40px",
                  }}
                />
              </View>
            </View>
          </View>
          <View
            mt={5}
            px={2}
            style={{
              width: "350px",
              height: "110px",
              backgroundColor: "#F1FFEF",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View mt={2} mb={2} justifyContent="space-between">
              <Text
                style={{
                  width: "85px",
                  height: "16px",
                  fontWeight: "800",
                  fontSize: "12px",
                  alignItems: "center",
                }}
              >
                Study Golang
              </Text>
              <Text
                style={{
                  marginTop: "5px",
                  width: "217px",
                  height: "27px",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                Learn Golang to improve fundamentals and familiarize with
                coding.
              </Text>
              <Text
                style={{
                  marginTop: "20px",
                  width: "70px",
                  height: "11px",
                  fontWeight: "400",
                  fontSize: "8px",
                  display: "flex",
                }}
              >
                <AntDesign name="calendar" color="black" />
                19 July 2022
              </Text>
            </View>
            <View>
              <View
                mt={2}
                style={{
                  width: "50px",
                  height: "20px",
                  backgroundColor: "#81C8FF",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Study
                </Text>
              </View>
              <View
                mt={5}
                style={{
                  marginLeft: "8px",
                  height: "30px",
                  width: "30px",
                  borderRadius: "40px",
                }}
              >
                <img
                  src={img2}
                  alt=""
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "40px",
                  }}
                />
              </View>
            </View>
          </View>
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default ListTodo;
