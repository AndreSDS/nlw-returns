import React from "react";

import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import {styles} from "./styles";
const {container, titleText, imageStyle} = styles;

interface Props extends TouchableOpacityProps {
  title?: string;
  image?: ImageProps;
}

export function OptionButton({title, image, ...rest}: Props) {
  return (
    <TouchableOpacity style={container} {...rest}>
      <Image source={image || ({} as ImageProps)} style={imageStyle} />
      <Text style={titleText}>{title}</Text>
    </TouchableOpacity>
  );
}
