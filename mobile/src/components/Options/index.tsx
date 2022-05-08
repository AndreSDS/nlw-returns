import {Text, View} from "react-native";
import {Copyright} from "../Copyright";
import {OptionButton} from "../OptionButton";

import {feedbackTypes} from "../../utils/feedbackTypes";

import {FeedbackType} from "../Widget";
import {styles} from "./styles";
const {container, options, title} = styles;

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType | null) => void;
}

export function Options({onFeedbackTypeChanged}: Props) {
  return (
    <View style={container}>
      <Text style={title}>Deixe seu feedback</Text>

      <View style={options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <OptionButton
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
