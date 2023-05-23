import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";

import { Container, Header, Title, Subtitle } from "./style";
import { useTheme } from "styled-components";

import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

export function MyCars() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();
  const theme = useTheme();
  
  function handleReturn() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/schedules_byuser?user_id=1");
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return <Container>
    <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleReturn} color={theme.colors.shape} />
        <Title>
          Escolha uma{"\n"}data de início e{"\n"}fim do aluguel
        </Title>
      </Header>
  </Container>;
}
