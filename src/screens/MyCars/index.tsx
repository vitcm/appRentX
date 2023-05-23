import React, { useEffect, useState } from "react";
import { StatusBar, FlatList } from "react-native";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointment,
  AppointmentQuantity,
  AppointmentTitle,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./style";
import { useTheme } from "styled-components";
import { AntDesign } from "@expo/vector-icons";

import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { Car } from "../../components/Car";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
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
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
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
        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>
      <Content>
        <Appointment>
          <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
          <AppointmentQuantity>05</AppointmentQuantity>
        </Appointment>
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CarWrapper>
              <Car data={item.car} />
              <CarFooter>
                <CarFooterTitle>Período</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>23/05/2023</CarFooterDate>
                  <AntDesign
                    name="arrowright"
                    size={20}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarFooterDate>25/05/2023</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWrapper>
          )}
        />
      </Content>
    </Container>
  );
}
