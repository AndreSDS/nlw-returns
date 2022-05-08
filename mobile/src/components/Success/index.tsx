import {Image, Text, TouchableOpacity, View} from "react-native";
import successImg from "../../assets/success.png";
import {Copyright} from "../Copyright";

import {styles} from "./styles";
const {container, title, image, button, buttonTitle} = styles;

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({onSendAnotherFeedback}: Props) {
  return (
    <View style={container}>
      <Image source={successImg} style={image} />
      <Text style={title}>Agradecemos o feedback</Text>
      <TouchableOpacity style={button} onPress={onSendAnotherFeedback}>
        <Text style={buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
