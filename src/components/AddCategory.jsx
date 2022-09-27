import React from "react";
import { View, Text, Input, Button, Center, VStack } from "native-base";

const AddCategory = () => {
  return (
    <View>
      <Center>
        <VStack>
          <View mt={20}>
            <Text
              mb={22}
              style={{
                width: "310",
                height: "40px",
                fontSize: "25px",
                fontWeight: "800",
                fontStyle: "normal",
                lineHeight: "34px",
                color: "#00000",
              }}
            >
              Add Category
            </Text>
            <Input
              mb={22}
              mx="auto"
              placeholder="Search List...."
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
                width: "310px",
                height: "40px",
              }}
            />
            <Button
              w={310}
              h={50}
              colorScheme="danger"
              marginTop={60}
              onPress={() => navigation.navigate("ListTodo")}
            >
              <Text fontWeight={800} fontSize={18} color="white">
                Add Category
              </Text>
            </Button>
          </View>
          <View mt={68}>
            <Text
              style={{
                width: "200px",
                height: "34px",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "25px",
              }}
            >
              List Category
            </Text>
            <View
              mt={5}
              px={5}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                p={2}
                style={{ backgroundColor: "#81C8FF", borderRadius: "5px" }}
              >
                Study
              </View>
              <View
                p={2}
                style={{ backgroundColor: "#FF8181", borderRadius: "5px" }}
              >
                Home Work
              </View>
              <View
                p={2}
                style={{ backgroundColor: "#FFB681", borderRadius: "5px" }}
              >
                Workout
              </View>
            </View>
          </View>
        </VStack>
      </Center>
    </View>
  );
};

export default AddCategory;
