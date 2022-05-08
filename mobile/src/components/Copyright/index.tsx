import React from "react";
import {Text, View} from "react-native";

import {styles} from "./styles";
const {container, title} = styles;

export function Copyright() {
  return (
    <View style={container}>
      <Text style={title}>Feito com amor por Andre_SDS</Text>
    </View>
  );
}
