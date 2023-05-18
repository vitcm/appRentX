import React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./style";
import ArrowSvg from "../../assets/arrow.svg";

import { BackButton } from "../../components/BackButton";
import theme from "../../styles/theme";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export function Schedule() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={true}>18/05/2023</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>

      </Content>

      <Footer>
        <Button 
        title="Confirmar"/>
      </Footer>
    </Container>
  );
}
