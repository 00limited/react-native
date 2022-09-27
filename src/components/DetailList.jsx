import { View, Text, Center } from "native-base";
import React from "react";

const DetailList = () => {
  return (
    <View>
      <Center>
        <View mt={5} w={310} h={532} background="#DAEFFF" borderRadius={5}>
          <View
            px={5}
            style={{
              flexDirection: "row",
              displa: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View fontSize={22} fontWeight={800} fontStyle="normal">
              Study -Golang
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
                  backgroundColor: "gray",
                }}
              ></View>
            </View>
          </View>
          <View mt={5} px={5}>
            <Text>
              Learn Golang to improve fundamentals and familiarize with coding.
              Advantages of Go Go has advantages over other languages,
              including: Supports concurrency at the language level with fairly
              easy application Supports data processing with multiple processors
              at the same time (parallel processing) Have a garbage collector
              The compilation process is very fast It's not a hierarchical
              programming language and it's not strict OOP, giving developers
              the freedom to how to write code. Listing Material : Installation
              Setup Go Modules Setup Gopath & Workspace Go Command Hello World
              Variable Tipe DataKonstanta Operator Condition Loops
            </Text>
          </View>
        </View>
      </Center>
    </View>
  );
};

export default DetailList;
