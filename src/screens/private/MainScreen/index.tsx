// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import ToggleScreen from '@root/component/themeToggle';
import styled from 'styled-components/native';
import {withTheme} from 'styled-components/native';
// @ts-ignore
import {useActions} from '@root/hooks/useActions';
import CheckBox from 'react-native-check-box';
import navigationStrings from '../../../navigations/navigationStrings';

const MainScreen = ({navigation}) => {
  const {getHome} = useActions();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getHome({}).then(res => {
      console.log(JSON.stringify(res));
    });
  }, []);

  // @ts-ignore
  return (
    <MainWrapper>
      <ToggleScreen />
      <BottomWrapper>
        <CheckBox
          style={{width: '65%'}}
          onClick={() => {
            setChecked(!checked);
            navigation.navigate(navigationStrings.SPLASH_WITH_SEARCH);
          }}
          checkBoxColor="white"
          rightTextStyle={{color: 'white', fontSize: 19}}
          isChecked={checked}
          rightText={'Don’t show me intro again'}
        />
        <BottomText>Skip Intro</BottomText>
      </BottomWrapper>
    </MainWrapper>
  );
};

export default withTheme(MainScreen);

const BottomText = styled.Text`
  color: ${({theme}: any) => theme.colors.accentColor};
  font-size: 19px;
`;

const BottomWrapper = styled.View`
  flex: 1;
  width: 400px;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const MainWrapper = styled.View`
  align-items: center;
  flex: 1;
  background-color: ${({theme}: any) => theme.colors.primary};
`;
