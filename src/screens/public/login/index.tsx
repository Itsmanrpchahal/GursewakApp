// @ts-ignore
import React from 'react';
import {withTheme} from 'styled-components/native';
import styled from 'styled-components/native';
import {icInOnkar} from '../../../assets';
import TextField from '../../../component/TextField';
import FillBtn from '../../../component/FillBtn';
import BorderBtn from '../../../component/BorderBtn';
import {ScrollView} from 'react-native';
import {useTheme} from 'styled-components';
import navigationStrings from '../../../navigations/navigationStrings';

const Login = ({navigation}) => {
  const {colors}: any = useTheme();
  return (
    <ScrollView style={{height: '100%', backgroundColor: colors.primary}}>
      <MainWrapper>
        <ImageWrapper source={icInOnkar} />
        <TextTitle>Resources</TextTitle>
        <ContentWrapper>
          <TextField
            placeholder="Username"
            keyboardType={'email-address'}
            autoCapitalize={'none'}
          />

          <TextField
            autoCapitalize={'none'}
            placeholder="********"
            secureTextEntry={true}
          />
          <ForgotPassword>Forgot Password?</ForgotPassword>

          <FillBtn
            btntext={'Login'}
            onPress={() => {
              navigation.navigate(navigationStrings.SIGN_UP);
            }}
          />
          <BorderBtn
            btntext={'Sign Up'}
            onPress={() => {
              navigation.navigate(navigationStrings.SIGN_UP);
            }}
          />
        </ContentWrapper>
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(Login);

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
