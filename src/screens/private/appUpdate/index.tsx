// @ts-ignore
import React from 'react';
import styled, {withTheme} from 'styled-components/native';
import FillBtn from '../../../component/FillBtn';
import {ScrollView} from 'react-native';
import {useTheme} from 'styled-components';
import BorderBtn from '../../../component/BorderBtn';

const AppUpdate = () => {
  const {colors}: any = useTheme();
  return (
    <ScrollView style={{backgroundColor: colors.primary}}>
      <MainWrapper>
        <TextWrapper>Current Version</TextWrapper>
        <TextWrapperWhite>00.0.0.000</TextWrapperWhite>

        <TextWrapper style={{marginTop: 30}}>Size</TextWrapper>
        <TextWrapperWhite>5 MB</TextWrapperWhite>
        <BorderBtn btntext={'Update Gursevak App'} onPress={() => {}} />
        <DecsTextCenter>• Added feature</DecsTextCenter>

        <TextWrapper>Latest</TextWrapper>
        <TextWrapperWhite>Update 0.0.000 Available</TextWrapperWhite>
        <DecsTextWrapperWhite>Size: 6MB</DecsTextWrapperWhite>
        <DecsTextWrapperWhite>Update 0.0.000 Includes:</DecsTextWrapperWhite>
        <DecsTextWrapperWhite>• Feature one</DecsTextWrapperWhite>
        <DecsTextWrapperWhite>• This bug fixed</DecsTextWrapperWhite>
        <DecsTextWrapperWhite>• Added feature</DecsTextWrapperWhite>

        <FillBtn btntext={'Update Gursevak App'} onPress={() => {}} />
        <DecsTextCenter>• Added feature</DecsTextCenter>
      </MainWrapper>
    </ScrollView>
  );
};

export default withTheme(AppUpdate);

const DecsTextWrapperWhite = styled.Text`
  color: ${({theme}: any) => theme.colors.textWhite};
  margin-top: 10px;
  font-size: ${({theme, fontSize}: any) => theme.fontSize[0].cardDate}px;
`;

const DecsTextCenter = styled.Text`
  width: 100%;
  margin-top: 16px;
  color: ${({theme}: any) => theme.colors.textWhite};
  text-align: center;
`;

const TextWrapperWhite = styled.Text`
  color: ${({theme}: any) => theme.colors.textWhite};
  margin-top: 10px;
  font-size: ${({theme, fontSize}: any) => theme.fontSize[0].cardSubTitle}px;
`;

const TextWrapper = styled.Text`
  color: ${({theme}: any) => theme.colors.accentColor};
  font-size: ${({theme, fontSize}: any) => theme.fontSize[0].cardSubTitle}px;
`;

const MainWrapper = styled.View`
  padding: 16px;
  background-color: ${({theme}: any) => theme.colors.primary};
`;
