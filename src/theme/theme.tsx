import {
  DarkTheme,
  DefaultTheme as LightTheme,
} from "@react-navigation/native";

export const navigationTheme = {
  light: {
    ...LightTheme,
    type: "light",
    colors: {
      ...LightTheme.colors,
      primary: "#2451A0",
      secondary: "#17428E",
      primaryYellow: "#F5D43B",
      secondaryWhite: "#FFFFFF",
      accentColor: "#F4D43B",
      header: "#17428E",
      pothiTextTitle: "#17428E",
      pothiTextSubTitle: "#142849",
      pothiTextDecs: "#525252",
      pothiTextSubDesc: "#525252",
      textLightTheme: "#B4CFFF",
      error: "#D93F3C",
      text: "#464646",
      red: "#D93F3C",
      textGray: "#808080",
      inactive: "#CBC9D6",
      yellow: "#F5D43B",
      greenColor: "#17907A",
      textBlack: "#000000",
      raagColor: "#9F6634",
      blueYellow: "#2E509B",
      blueWhite: "#2451A0",
      blueYellowBC: "#F5D43B",
      akharTextBtnColor: "#17428E",
      pankantiColor: "#182D4E",
      pankantiBC: "#E8E8E8",
      textWhite: "#FFF",
      divider: "#808080",
      backgroundAkhar: "#EDEDED",
      parrotGreen: "#16BD04",
      settingTheme: "#1F2732",
      cadmiumRed: "#D22B2B",
      lightTheme: "#98A9C8",
    },
    spacing: {
      horizontal: 15,
    },
    fontSize: [
      {
        cardSmallText: 12,
        cardDate: 14,
        cardTitle: 19,
        cardSubTitle: 15,
        text26: 26,
        akharText: 32,
      },
      {
        cardSmallText: 13,
        cardDate: 15,
        cardTitle: 20,
        cardSubTitle: 16,
        text26: 28,
        akharText: 33,
      },
      {
        cardSmallText: 14,
        cardDate: 16,
        cardTitle: 21,
        cardSubTitle: 17,
        text26: 30,
        akharText: 34,
      },
      {
        cardSmallText: 15,
        cardDate: 17,
        cardTitle: 22,
        cardSubTitle: 18,
        text26: 32,
        akharText: 35,
      },
      {
        cardSmallText: 16,
        cardDate: 18,
        cardTitle: 23,
        cardSubTitle: 19,
        text26: 32,
        akharText: 36,
      },
    ],
  },
  dark: {
    ...DarkTheme,
    type: "dark",
    colors: {
      ...DarkTheme.colors,
      primary: "#182D4E",
      secondary: "#142849",
      primaryYellow: "#0D1C39",
      secondaryWhite: "#182D4E",
      header: "#0D1C39",
      accentColor: "#F4D43B",
      textLightTheme: "#B4CFFF",
      pothiTextTitle: "#FFFFFF",
      pothiTextSubTitle: "#F5D43B",
      pothiTextDecs: "#9AB6E6",
      pothiTextSubDesc: "#DDDDDD",
      blueWhite: "#FFFFFF",
      primary1: "#2251A0",
      error: "#D93F3C",
      yellow: "#F5D43B",
      text: "#FFFFFF",
      red: "#D93F3C",
      blueYellowBC: "#2251A0",
      textGray: "#808080",
      inactive: "rgba(255, 255, 255, 0.6)",
      greenColor: "#17907A",
      pankantiBC: "#142849",
      raagColor: "#F5D43B",
      textBlack: "#000000",
      blueYellow: "#F5D43B",
      backgroundAkhar: "#182D4E",
      akharTextBtnColor: "#F5D43B",
      pankantiColor: "#FFFFFFF",
      textWhite: "#FFF",
      divider: "#000000",
      parrotGreen: "#16BD04",
      settingTheme: "#FFFFFF",
      cadmiumRed: "#D22B2B",
      lightTheme: "#98A9C8",
    },
    spacing: {
      horizontal: 15,
    },
    fontSize: [
      {
        cardSmallText: 12,
        cardDate: 14,
        cardTitle: 19,
        cardSubTitle: 15,
        text26: 26,
        akharText: 32,
      },
      {
        cardSmallText: 13,
        cardDate: 15,
        cardTitle: 20,
        cardSubTitle: 16,
        text26: 28,
        akharText: 33,
      },
      {
        cardSmallText: 14,
        cardDate: 16,
        cardTitle: 21,
        cardSubTitle: 17,
        text26: 30,
        akharText: 34,
      },
      {
        cardSmallText: 15,
        cardDate: 17,
        cardTitle: 22,
        cardSubTitle: 18,
        text26: 32,
        akharText: 35,
      },
      {
        cardSmallText: 16,
        cardDate: 18,
        cardTitle: 23,
        cardSubTitle: 19,
        text26: 32,
        akharText: 36,
      },
    ],
  },
};
