import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedule } from "../screens/Schedule";
import { ScheduleDetails } from "../screens/ScheduleDetails";
import { ScheduleComplete } from "../screens/ScheduleComplete";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Splash">
      <Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Screen
        name="Schedule"
        component={Schedule}
        options={{ headerShown: false }}
      />
      <Screen
        name="ScheduleDetails"
        component={ScheduleDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="ScheduleComplete"
        component={ScheduleComplete}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
