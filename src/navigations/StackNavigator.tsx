import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import pothiSahibViewer from "../screens/private/pothiSahibViewer";
import navigationStrings from "./navigationStrings";

const Drawer = createDrawerNavigator();

export default function pothiSahibViewerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={navigationStrings.POTHI_SHAIB_VIEW}>
        <Drawer.Screen
          name={navigationStrings.POTHI_SHAIB_VIEW}
          component={pothiSahibViewer}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
