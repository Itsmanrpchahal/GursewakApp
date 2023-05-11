import {DarkTheme, DefaultTheme as LightTheme} from '@react-navigation/native';

export const navigationTheme = {
  light: {
    ...LightTheme,
    type: 'light',
    colors: {
      ...LightTheme.colors,
      primary: '#2451A0',
      secondary: '#17428E',
      accentColor: '#F4D43B',
      textLightTheme:'#B4CFFF',
      error: '#D93F3C',
      text: '#000000',
      red: '#D93F3C',
      textGray: '#808080',
      inactive: '#CBC9D6',
      greenColor: '#17907A',
      textBlack: '#000000',
      textWhite: '#FFF',
      divider: '#808080',
      parrotGreen: '#16BD04',
      settingTheme: '#1F2732',
      cadmiumRed: '#D22B2B',
    },
    spacing: {
      horizontal: 15,
    },
    fontSize: [
      {
        cardDate: 14,
        cardTitle: 19,
        cardSubTitle: 15,
      },
      {
        cardDate: 15,
        cardTitle: 20,
        cardSubTitle: 16,
      },
      {
        cardDate: 16,
        cardTitle: 21,
        cardSubTitle: 17,
      },
      {
        cardDate: 17,
        cardTitle: 22,
        cardSubTitle: 18,
      },
      {
        cardDate: 18,
        cardTitle: 23,
        cardSubTitle: 19,
      },
    ],
  },
  dark: {
    ...DarkTheme,
    type: 'dark',
    colors: {
      ...DarkTheme.colors,
      primary: '#182D4E',
      secondary: '#142849',
      accentColor: '#F4D43B',
      textLightTheme:'#B4CFFF',
      error: '#D93F3C',
      text: '#FFFFFF',
      red: '#D93F3C',
      textGray: '#808080',
      inactive: 'rgba(255, 255, 255, 0.6)',
      greenColor: '#17907A',
      textBlack: '#000000',
      textWhite: '#FFF',
      divider: '#000000',
      parrotGreen: '#16BD04',
      settingTheme: '#FFFFFF',
      cadmiumRed: '#D22B2B',
    },
    spacing: {
      horizontal: 15,
    },
    fontSize: [
      {
        cardDate: 14,
        cardTitle: 19,
        cardSubTitle: 15,
      },
      {
        cardDate: 15,
        cardTitle: 20,
        cardSubTitle: 16,
      },
      {
        cardDate: 16,
        cardTitle: 21,
        cardSubTitle: 17,
      },
      {
        cardDate: 17,
        cardTitle: 22,
        cardSubTitle: 18,
      },
      {
        cardDate: 18,
        cardTitle: 23,
        cardSubTitle: 19,
      },
    ],
  },
};
