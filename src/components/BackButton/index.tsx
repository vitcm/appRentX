import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components";
import { Container } from "./style";

interface Props extends TouchableOpacityProps {
  color?: string;
  onPress: () => void;
}

export function BackButton({ color, onPress }: Props) {
  const theme = useTheme();
  return (
    <Container onPress={onPress}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
