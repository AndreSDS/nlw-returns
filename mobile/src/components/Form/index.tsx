import * as FileSystem from "expo-file-system";
import {ArrowLeft} from "phosphor-react-native";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import {captureScreen} from "react-native-view-shot";
import {theme} from "../../theme";
import {feedbackTypes} from "../../utils/feedbackTypes";
import {ButtonSend} from "../ButtonSend";
import {ScreenshotButton} from "../ScreenshotButton";
import {FeedbackType} from "../Widget";

import {useState} from "react";
import {api} from "../../libs/api";
import {styles} from "./styles";
const {
  container,
  header,
  titleContainer,
  titleText,
  imageStyle,
  input,
  footer,
} = styles;

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent,
}: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const {title, image} = feedbackTypeInfo;

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((err) => console.log(err));
  }

  function handleRemoveScreenshot() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenShotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, {encoding: "base64"}));

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64,${screenShotBase64}`,
      });

      onFeedbackSent();
    } catch (error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={container}>
      <View style={header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={titleContainer}>
          <Image source={image} style={imageStyle} />
          <Text style={titleText}>{title}</Text>
        </View>
      </View>

      <TextInput
        autoCorrect={false}
        multiline
        style={input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeScreenshot={handleScreenshot}
          onRemoveScreenshot={handleRemoveScreenshot}
        />
        <ButtonSend
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </View>
    </View>
  );
}
