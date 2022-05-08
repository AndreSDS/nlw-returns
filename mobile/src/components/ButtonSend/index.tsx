import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import {theme} from "../../theme";

import {styles} from "./styles";
const {container, title} = styles;

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export function ButtonSend({isLoading, ...rest}: Props) {
  return (
    <TouchableOpacity {...rest} style={container}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
