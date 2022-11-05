import { TouchableOpacity, Text, View } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AddHeaderButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <PlusCircleIcon size={30} color="#036ffc" />
    </TouchableOpacity>
  );
};

export default AddHeaderButton;
