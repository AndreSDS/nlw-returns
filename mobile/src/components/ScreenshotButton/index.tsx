import {Camera, Trash} from "phosphor-react-native";
import React from "react";

import {Image, TouchableOpacity, View} from "react-native";
import {theme} from "../../theme";
import {styles} from "./styles";
const {container, removeIcon, imageStyle} = styles;

interface Props {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onRemoveScreenshot,
  onTakeScreenshot,
}: Props) {
  return (
    <TouchableOpacity
      style={container}
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
    >
      {screenshot ? (
        <View>
          <Image style={imageStyle} source={{uri: screenshot}} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_primary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
