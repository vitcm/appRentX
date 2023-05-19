import React from "react";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import { Routes } from "./src/routes";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  SplashScreen.hideAsync();
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <></>
    </ThemeProvider>
  );
}
