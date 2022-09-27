import { View, Text, Button, Input, TextArea } from "native-base";
import React from "react";

const AddList = () => {
  return (
    <View>
      <Text
        mt={8}
        mb={3}
        w={120}
        h={34}
        fontWeight={800}
        fontSize={25}
        fontStyle="normal"
      >
        Add List
      </Text>
      <Input
        mb={22}
        mx="auto"
        placeholder="Name"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "5px",
          width: "310px",
          height: "40px",
        }}
      />
      <Input
        mb={22}
        mx="auto"
        placeholder="Category"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "5px",
          width: "310px",
          height: "40px",
        }}
      />
      <Input
        mb={22}
        mx="auto"
        placeholder="Choose Date"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "5px",
          width: "310px",
          height: "40px",
        }}
      />
      <TextArea h={20} placeholder="Description" w={310} maxW="310" />

      <Button w={310} h={50} colorScheme="danger" marginTop={60}>
        <Text fontWeight={800} fontSize={18} color="white">
          Add List
        </Text>
      </Button>
    </View>
  );
};

export default AddList;
