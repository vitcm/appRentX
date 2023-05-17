import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';

import { Container, Header } from "./styles";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      ></StatusBar>
      <Header>
        <Logo />
      </Header>
    </Container>
  );
}
