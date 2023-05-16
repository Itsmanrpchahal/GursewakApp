import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { withTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import navigationStrings from "../../../../navigations/navigationStrings";
import pothiSahibViewer from "../../pothiSahibViewer/index";
import { DrawerActions } from "@react-navigation/native";
import { icSearch } from "../../../../assets";
import { navigationRef } from "../../../../navigations/RootNavigations";
import { useNavigation } from "@react-navigation/core";
import CustomDrawer from "../../../../navigations/CustomDrawer";

const Drawer = createDrawerNavigator();
const PothiSahibSideMenu = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerPosition: "right",
          drawerStyle: { width: 160 },
        }}
      >
        <Drawer.Screen
          key={navigationStrings.POTHI_SHAIB_VIEW}
          name={navigationStrings.POTHI_SHAIB_VIEW}
          component={pothiSahibViewer}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(PothiSahibSideMenu);
