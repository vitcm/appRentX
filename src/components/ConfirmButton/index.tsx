import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./style";

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function ConfirmButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
