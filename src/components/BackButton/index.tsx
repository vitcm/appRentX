import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components";
import { Container } from "./style";

interface Props extends TouchableOpacityProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
