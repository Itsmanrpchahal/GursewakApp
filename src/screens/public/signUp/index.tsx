// @ts-ignore
import React, {useState} from 'react';
import styled, {useTheme, withTheme} from 'styled-components/native';
import {ScrollView} from 'react-native';
import {icInOnkar} from '../../../assets';
import TextField from '../../../component/TextField';
import FillBtn from '../../../component/FillBtn';
import navigationStrings from '../../../navigations/navigationStrings';
import CheckBox from 'react-native-check-box';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const {colors}: any = useTheme();
  return (
    <ScrollView style={{height: '100%', backgroundColor: colors.primary}}>
      <MainWrapper>
        <ImageWrapper source={icInOnkar} />
        <TextTitle>Resources</TextTitle>
        <ContentWrapper>
          <TextField
            placeholder="Fullname"
            keyboardType={'default'}
            autoCapitalize={'none'}
          />

          <TextField
            placeholder="Email"
            keyboardType={'email-address'}
            autoCapitalize={'none'}
          />

          <TextField
            autoCapitalize={'none'}
            placeholder="********"
            secureTextEntry={true}
          />
          <CheckBox
            style={{width: '85%', marginTop: 16}}
            onClick={() => {
              setChecked(!checked);
            }}
            checkBoxColor="white"
            rightTextStyle={{color: 'white', fontSize: 16}}
            isChecked={checked}
            rightText={'I agree to the terms and conditions.'}
          />

          <FillBtn
            btntext={'Sign Up'}
            onPress={() => {
              navigation.navigate(navigationStrings.SETTINGS);
            }}
          />
        </ContentWrapper>
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(SignUp);

const ForgotPassword = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  color: ${({theme}: any) => theme.colors.textWhite};
`;

const TextTitle = styled.Text`
  font-size: 20px;
  color: ${({theme}: any) => theme.colors.accentColor};
  margin-top: 16px;
`;

const ContentWrapper = styled.View`
  margin-top: 40px;
  align-items: center;
  width: 100%;
`;

const ImageWrapper = styled.Image`
  margin-top: 50px;
`;

const MainWrapper = styled.View`
  align-items: center;
  flex: 1;
  padding: 16px;
  background-color: ${({theme}: any) => theme.colors.primary};
`;
