import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const carData = {
    brand: "audi",
    name: "RS 5 coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail: "https://www.pngmart.com/files/22/Audi-RS5-PNG-HD.png",
  };

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      ></StatusBar>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total: 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
