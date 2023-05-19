import React from "react";
import { useNavigation } from "@react-navigation/native";

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
import { Calendar } from "../../components/Calendar";

export function Schedule() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleScheduleDetails() {
    navigation.navigate("ScheduleDetails");
  }

  function handleReturn() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => handleReturn()} color={theme.colors.shape} />
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
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleScheduleDetails}/>
      </Footer>
    </Container>
  );
}