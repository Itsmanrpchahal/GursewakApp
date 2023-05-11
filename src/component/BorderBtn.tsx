import {TouchableOpacity} from 'react-native';
// @ts-ignore
import React from 'react';
import styled from 'styled-components/native';

type BorderBtnProps = {
  btntext: string;
  onPress?: Function;
};

const BorderBtn: React.FC<BorderBtnProps> = ({btntext, onPress}) => {
  return (
    <MainWrapper>
      <TouchableOpacity onPress={() => onPress()}>
        <BtnOutline>
          <BtnOutlineText>{btntext}</BtnOutlineText>
        </BtnOutline>
      </TouchableOpacity>
    </MainWrapper>
  );
};

export default BorderBtn;

const BtnOutlineText = styled.Text`
  color: ${({theme}: any) => theme.colors.accentColor};
  font-weight: bold;
`;

const BtnOutline = styled.View`
  width: 200px;
  height: 48px;
  padding: 5px;
  border-width: 2px;
  border-radius: 100px;
  margin-top: 16px;
  border-color: ${({theme}: any) => theme.colors.accentColor};
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
